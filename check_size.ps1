Add-Type -AssemblyName System.Drawing

$brainDir = (Get-Item "..\..\..\.gemini\antigravity-ide\brain\51ab817c-3137-4258-9de8-b07fa9f24666\.user_uploaded").FullName
$files = Get-ChildItem -Path $brainDir -Filter "media_*.png" | Sort-Object Name

foreach ($f in $files) {
    Write-Output "File: $($f.Name)"
    $bmp = [System.Drawing.Bitmap]::FromFile($f.FullName)
    Write-Output "Size: $($bmp.Width) x $($bmp.Height)"
    $bmp.Dispose()
}
