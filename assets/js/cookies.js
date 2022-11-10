function cookies(functions) {
  const conteiner = document.querySelector('.cookies-conteiner')
  const button = document.querySelector('.cookies-button')

  if (!conteiner || !button) return null

  function getFormPref() {
    return [...document.querySelectorAll('[data-function]')].filter(el => el.checked).map(el => el.getAttribute('data-function'))
  }

  function activateFunctions(pref) {
    pref.forEach((f) => functions[f]())
    conteiner.style.display = 'none'
    window.localStorage.setItem('cookies-pref', JSON.stringify(pref))
  }

  function handleSave() {
    const pref = getFormPref()
    activateFunctions(pref)
  }

  button.addEventListener('click', handleSave)
}

function termos() {
  console.log('Função de Termos')
}

function analytics() {
  console.log('Função de Analytics')
}

cookies({
  termos,
  analytics
})