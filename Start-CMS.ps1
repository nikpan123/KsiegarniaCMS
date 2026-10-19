$ErrorActionPreference = 'Stop'
$port = if ($env:CMS_UI_PORT) { [int]$env:CMS_UI_PORT } else { 4181 }
$url = "http://127.0.0.1:$port"
function Test-Panel {
    try { $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 2 } catch [System.Net.WebException] { return $false }
    if ($response.Content -notmatch 'Księgarnia CMS') { throw "Port $port zajmuje inna aplikacja." }
    return $true
}
try {
    if (-not (Test-Panel)) {
        $node = (Get-Command node -ErrorAction Stop).Source
        $logs = Join-Path $PSScriptRoot '.cms'
        New-Item -ItemType Directory -Path $logs -Force | Out-Null
        Start-Process -FilePath $node -ArgumentList 'dashboard/server.mjs' -WorkingDirectory $PSScriptRoot -WindowStyle Hidden -RedirectStandardOutput (Join-Path $logs 'server.log') -RedirectStandardError (Join-Path $logs 'server-error.log')
        $ready = $false
        for ($attempt=0; $attempt -lt 30; $attempt++) { Start-Sleep -Milliseconds 250; if (Test-Panel) { $ready=$true; break } }
        if (-not $ready) { throw 'Panel nie wystartował. Sprawdź .cms/server-error.log.' }
    }
    Start-Process $url
} catch { Write-Host $_.Exception.Message -ForegroundColor Red; exit 1 }
