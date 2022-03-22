let ourVision = [
	'B$u$i$ld',
	'$t$$h$e',
	'N$e$x$t',
	'E$$ra',
	'$$o$f$',
	'S$$of$t$wa$r$e',
	'De$$ve$l$op$me$n$t',
]

const clean = (str) => {
	return str
		.map((word) => word.replace(/[^a-zA-Z0-9 ]/g, '').trim())
		.join(' ')
		.toUpperCase()
}

console.log(clean(ourVision))
