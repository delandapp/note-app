let not = document.querySelector('.not')
let content = document.querySelector('.content')
let textarea = content.children[0].children[0]




content.children[0].children[1].addEventListener('click', ()=>{
    if (textarea.value == "" && content.children[0].children.length < 3) {
        let required = document.createElement('span')
        textarea.after(required)
        required.textContent = "!    Harap Disi Jangan Dikosongkan"
        
    } 

    if (textarea.value != "") {
        if(content.children[0].children.length == 3) {
            content.children[0].children[1].remove()
        }
        let note = document.createElement('div')
        note.classList.add('data')
        let isi = document.createElement('p')
        let icon = document.createElement('div')
        let trash = document.createElement('i')
        let edit = document.createElement('i')
        icon.classList.add('icon')
        trash.setAttribute('class', 'fa-solid fa-trash')
        edit.setAttribute('class', 'fa-solid fa-pen-to-square')
        content.children[0].after(note)
        isi.innerText = textarea.value
        note.append(isi)
        isi.after(icon)
        icon.append(trash)
        trash.after(edit)
        not.classList.remove('active')  
        textarea.value = ""
        console.info(content.children);
        let data = document.querySelectorAll('.data')
        data.forEach(function(e){
            e.children[1].children[0].addEventListener('click', () => {
                e.remove()
                if (content.children.length == 2) {
                    not.classList.add('active')
                }
            })
            e.children[1].children[1].addEventListener('click', () => {
                let pop = document.querySelector('.row.pop-up')
                e.children[0].setAttribute('id', 'edit')
                content.classList.add('blur')
                pop.style.display = 'inline-block'
                pop.children[0].children[2].value = e.children[0].textContent
                pop.children[0].children[0].addEventListener('click', ()=>{
                    content.classList.remove('blur')
                    e.children[0].removeAttribute('id')
                    pop.style.display = 'none'
                })
                pop.children[0].children[3].addEventListener('click', () => {
                    let edit = document.querySelector('#edit')
                    edit.textContent = pop.children[0].children[2].value
                    content.classList.remove('blur')
                    e.children[0].removeAttribute('id')
                    pop.style.display = 'none'
                })
            })
        })
    }
    
})


// console.log(content.children[0].children[1])