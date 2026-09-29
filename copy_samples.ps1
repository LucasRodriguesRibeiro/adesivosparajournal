$src = Join-Path $env:USERPROFILE ".gemini\antigravity-ide\brain\51ab817c-3137-4258-9de8-b07fa9f24666\.user_uploaded"
$dst = Join-Path $env:USERPROFILE "Documents\Low Tickets\Stickers\assets"

New-Item -ItemType Directory -Force -Path $dst | Out-Null

Copy-Item "$src\media_1790693209576.png" "$dst\sample_eclectic.png" -Force
Copy-Item "$src\media_1790693242970.png" "$dst\sample_valentines.png" -Force
Copy-Item "$src\media_1790693249648.png" "$dst\sample_pop_flowers.png" -Force
Copy-Item "$src\media_1790693260583.png" "$dst\sample_cutout_text.png" -Force
Copy-Item "$src\media_1790693270301.png" "$dst\sample_animals.png" -Force

Write-Output "Done! Files in assets:"
Get-ChildItem $dst | Select-Object Name
