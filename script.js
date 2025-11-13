var armaduraNenhuma = {saude:0, mente: 0, vigor:0, forca:0, destreza:0, inteligencia:0, fe:0, arcano:0, equilibrio:0, dFis:0, dMag:0, dFog:0, dRai:0, dSag:0, dArc:0}
var armaduraCavaleiro = {saude:0, mente: 0, vigor:5, forca:3, destreza:-2, inteligencia:0, fe:0, arcano:0, equilibrio:25, dFis:20, dMag:6, dFog:12, dRai:6, dSag:6, dArc:2}
var armaduraAssassino = {saude:-1, mente: 0, vigor:2, forca:0, destreza:4, inteligencia:0, fe:0, arcano:0, equilibrio:10, dFis:10, dMag:10, dFog:8, dRai:13, dSag:6, dArc:8}
var armaduraMago = {saude:0, mente: 3, vigor:-2, forca:0, destreza:0, inteligencia:6, fe:0, arcano:0, equilibrio:5, dFis:4, dMag:20, dFog:8, dRai:12, dSag:10, dArc:10}
var armaduraProfeta = {saude:0, mente: 2, vigor:0, forca:-2, destreza:0, inteligencia:0, fe:6, arcano:0, equilibrio:5, dFis:8, dMag:10, dFog:12, dRai:8, dSag:20, dArc:10}
var armaduraCacador = {saude:0, mente: -1, vigor:0, forca:0, destreza:3, inteligencia:0, fe:0, arcano:2, equilibrio:8, dFis:10, dMag:10, dFog:8, dRai:16, dSag:8, dArc:20}

var armaNenhuma = 0
var armaparryingDagger = 110
var armaespadaLonga = 120
var armacajadoMago = 100
var armalancaSagrada = 115
var armaadagaArcana = 105

function danoArma(valor){
	if(valor ==='parryingDagger'){
		return(armaparryingDagger)
	}
	else if(valor === 'espadaLonga'){
		return(armaespadaLonga)
	}
	else if(valor === 'cajadoMago'){
		return(armacajadoMago)
	}
	else if(valor === 'lancaSagrada'){
		return(armalancaSagrada)
	}
	else if(valor === 'adagaArcana'){
		return(armaadagaArcana)
	}
	else{
		return(armaNenhuma)
	}
}


function atualizarDano(selectId,spanId){
	var sel = document.getElementById(selectId)
	var out = document.getElementById(spanId)
	
	if(sel){
		valor = sel.value
	}
	else{
		valor = "nenhum"
	}
	
	if(out){
		out.textContent = danoArma(valor)
	}
}
	

function calcularBuild(){
	var saude = Number(document.getElementById('saude').value) 
	var mente = Number(document.getElementById('mente').value)
	var vigor = Number(document.getElementById('vigor').value)
	var forca = Number(document.getElementById('forca').value)
	var destreza = Number(document.getElementById('destreza').value)
	var inteligencia = Number(document.getElementById('inteligencia').value)
	var fe = Number(document.getElementById('fe').value)
	var arcano = Number(document.getElementById('arcano').value)
	
	var armaduraUsada = document.getElementById('selecioneArmadura') ? document.getElementById('selecioneArmadura').value : 'nenhuma'
	var bonusArmadura
	
	switch(armaduraUsada){
		case 'cavaleiro':
			bonusArmadura = armaduraCavaleiro
			break
		case 'assassino':
			bonusArmadura = armaduraAssassino
			break
		case 'mago':
			bonusArmadura = armaduraMago
			break
		case 'profeta':
			bonusArmadura = armaduraProfeta
			break
		case 'cacador':
			bonusArmadura = armaduraCacador
			break
		default:
			bonusArmadura = armaduraNenhuma
	}
	
	var bonusSaude = bonusArmadura.saude
	var bonusMente = bonusArmadura.mente
	var bonusVigor = bonusArmadura.vigor
	var bonusForca = bonusArmadura.forca
	var bonusDestreza = bonusArmadura.destreza
	var bonusInteligencia = bonusArmadura.inteligencia
	var bonusFe = bonusArmadura.fe
	var bonusArcano = bonusArmadura.arcano
	var bonusEquilibrioArmadura = bonusArmadura.equilibrio
	
	if(document.getElementById('totalSaude')){
		document.getElementById('totalSaude').textContent = saude + bonusSaude
	}
	if(document.getElementById('totalMente')){
		document.getElementById('totalMente').textContent = mente + bonusMente
	}
	if(document.getElementById('totalVigor')){
		document.getElementById('totalVigor').textContent = vigor + bonusVigor
	}
	if(document.getElementById('totalForca')){
		document.getElementById('totalForca').textContent = forca + bonusForca
	}
	if(document.getElementById('totalDestreza')){
		document.getElementById('totalDestreza').textContent = destreza + bonusDestreza
	}
	if(document.getElementById('totalInteligencia')){
		document.getElementById('totalInteligencia').textContent = inteligencia + bonusInteligencia
	}
	if(document.getElementById('totalFe')){
		document.getElementById('totalFe').textContent = fe + bonusFe
	}
	if(document.getElementById('totalArcano')){
		document.getElementById('totalArcano').textContent = arcano + bonusArcano
	}
	
	
	
	var hp = 300 + (saude * 27)
	var fp = 50 + (mente * 6)
	var estamina = 80 + (vigor * 1.5)
	var equilibrio = bonusEquilibrioArmadura
	
	if(document.getElementById('hp')){
	document.getElementById('hp').textContent = hp
	}
	if(document.getElementById('fp')){
	document.getElementById('fp').textContent = fp
	}
	if(document.getElementById('estamina')){
	document.getElementById('estamina').textContent = estamina
	}
	if(document.getElementById('equilibrio')){
	document.getElementById('equilibrio').textContent = equilibrio
	}
	
	
	var dFis = bonusArmadura.dFis
	var dMag = bonusArmadura.dMag
	var dFog = bonusArmadura.dFog
	var dRai = bonusArmadura.dRai
	var dSag = bonusArmadura.dSag
	var dArc = bonusArmadura.dArc
	
	var defFisica = (vigor * 0.5) + dFis
	var defMagica = (inteligencia * 0.5) + dMag
	var defFogo = (forca * 0.5) + dFog
	var defRaio = (destreza * 0.5) + dRai
	var defSagrada = (fe * 0.5) + dSag
	var defArcana = (arcano * 0.5) + dArc
	
	if(document.getElementById('defFisica')){
	document.getElementById('defFisica').textContent = defFisica
	}
	if(document.getElementById('defMagica')){
	document.getElementById('defMagica').textContent = defMagica
	}
	if(document.getElementById('defFogo')){
	document.getElementById('defFogo').textContent = defFogo
	}
	if(document.getElementById('defRaio')){
	document.getElementById('defRaio').textContent = defRaio
	}
	if(document.getElementById('defSagrada')){
	document.getElementById('defSagrada').textContent = defSagrada
	}
	if(document.getElementById('defArcana')){
	document.getElementById('defArcana').textContent = defArcana
	}
	
	
	var level = 1
	level += saude - 10
	level += mente - 10
	level += vigor - 10
	level += forca - 10
	level += destreza - 10
	level += inteligencia - 10
	level += fe - 10
	level += arcano - 10
	document.getElementById('level').textContent = level
	
	atualizarDano('arma1','danoArma1')
	atualizarDano('arma2','danoArma2')
	atualizarDano('arma3','danoArma3')
}

var mudanca = document.querySelectorAll('#atributosAtuais input')
for(var i = 0; i < mudanca.length; i++){
	mudanca[i].addEventListener('input', calcularBuild)
}


document.getElementById('selecioneArmadura')?.addEventListener('change', calcularBuild)
document.getElementById('arma1')?.addEventListener('change', calcularBuild)
document.getElementById('arma2')?.addEventListener('change', calcularBuild)
document.getElementById('arma3')?.addEventListener('change', calcularBuild)
	

document.getElementById('reset').addEventListener('click', function(){
	document.getElementById('saude').value = 10
	document.getElementById('mente').value = 10
    document.getElementById('vigor').value = 10
    document.getElementById('forca').value = 10
    document.getElementById('destreza').value = 10
    document.getElementById('inteligencia').value = 10
    document.getElementById('fe').value = 10
    document.getElementById('arcano').value = 10
})


calcularBuild()