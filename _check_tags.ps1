$ErrorActionPreference = 'Stop'
$tags = @('div','section','footer','header','form','nav','script')
$fails = 0
Get-ChildItem -Path 'c:\Users\t\OneDrive\Desktop\Freelance\Forascom\*.html' | ForEach-Object {
  $c = Get-Content $_.FullName -Raw
  $name = $_.Name
  foreach ($t in $tags) {
    $open = ([regex]::Matches($c, '<' + $t + '[\s>]')).Count
    $close = ([regex]::Matches($c, '</' + $t + '>')).Count
    if ($open -ne $close) {
      Write-Output ("MISMATCH {0}: <{1}> open={2} close={3}" -f $name, $t, $open, $close)
      $fails++
    }
  }
  Write-Output ("OK {0}" -f $name)
}
if ($fails -eq 0) { Write-Output 'ALL TAGS BALANCED' } else { Write-Output ("{0} MISMATCHES" -f $fails) }
