# Localhost Server Nusantara Bangkit
$port = 8080
$url = "http://localhost:$port/"
$folder = $PSScriptRoot
if ([string]::IsNullOrWhiteSpace($folder)) {
    $folder = (Get-Location).Path
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($url)

try {
    $listener.Start()
} catch {
    Write-Host "Port 8080 sedang digunakan, mencoba port 8000..."
    $port = 8000
    $url = "http://localhost:$port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($url)
    $listener.Start()
}

Write-Host "=========================================================="
Write-Host "Server Nusantara Bangkit Berjalan di: $url"
Write-Host "Folder: $folder"
Write-Host "Tekan Ctrl+C untuk menghentikan server."
Write-Host "=========================================================="

Start-Process $url

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".mp3"  = "audio/mpeg"
    ".wav"  = "audio/wav"
    ".webp" = "image/webp"
    ".md"   = "text/markdown; charset=utf-8"
    ".txt"  = "text/plain; charset=utf-8"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = $request.Url.LocalPath
        if ($rawPath -eq "/" -or [string]::IsNullOrWhiteSpace($rawPath)) {
            $rawPath = "/index.html"
        }

        $decodedPath = [System.Uri]::UnescapeDataString($rawPath).TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
        $filePath = [System.IO.Path]::Combine($folder, $decodedPath)

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $contentType = $mimeTypes[$ext]
            }

            $response.ContentType = $contentType
            $response.AddHeader("Access-Control-Allow-Origin", "*")
            $response.StatusCode = 200

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            Write-Host "[200 OK] $rawPath"
        } else {
            $response.StatusCode = 404
            $errContent = "<h1>404 Not Found</h1><p>File $rawPath tidak ditemukan.</p>"
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes($errContent)
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
            Write-Host "[404 Not Found] $rawPath"
        }

        $response.OutputStream.Close()
    }
} catch {
    Write-Host "Server dihentikan."
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    $listener.Close()
}
