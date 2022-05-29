let resp = await fetch('https://wttr.in')
if (resp.ok) {
  console.log(await resp.text())
}
