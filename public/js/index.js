const toggleProjectSkills = (id) =>{
    let list = document.getElementById(id)
    let arrow = document.getElementById(`arrow-${id}`)
    list.classList.toggle('showSkills')
    arrow.classList.toggle('rotateArrow')
}
const closeShowMore = (id) =>{
    const element = document.getElementById(`long-description-${id}`)
    element.classList.remove('show-long-description')
}
const showMore = (id) =>{
    const element = document.getElementById(`long-description-${id}`)
    element.classList.add('show-long-description')
}

const showFullScreenImageModal = (src) =>{
    const modal = document.getElementById('full-image-modal')
    const modalImage = document.getElementById('modal-image')
    modalImage.setAttribute('src',src)
    modal.classList.add('show-full-image')
}
const closeFullScreenImageModal = () =>{
    const modal = document.getElementById('full-image-modal')
    modal.classList.remove('show-full-image')
}

const toggleSidePanel = () =>{
    const sidePanel = document.getElementById('sidePanel')
    const arrow = document.getElementById('side-panel-arrow')
    sidePanel.classList.toggle('hide-side-panel')
    arrow.classList.toggle('rotate-side-panel-arrow')
}