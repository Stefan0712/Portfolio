const showWindow = (className) =>{
    const window = document.querySelector(`.${className}`)
    window.classList.add('show-window')
} 
const closeWindow = (className) =>{
    const window = document.querySelector(`.${className}`)
    window.classList.remove('show-window')
} 
const toggleWindow = (className) =>{
    const window = document.querySelector(`.${className}`)
    if(className==='personal-info'){
        window.classList.toggle('show-personal-info')
    }else if(className==='skills'){

        window.classList.toggle('show-skills')
    }else if(className==='certificates'){

        window.classList.toggle('show-certificates')
    }
}