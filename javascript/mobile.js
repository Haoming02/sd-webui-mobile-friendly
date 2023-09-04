class OnTheGo {
    static main() {
        ['txt', 'img'].forEach((mode) => {
            const it_btn = document.getElementById('interrogate')
            it_btn.parentElement.style.display = 'contents'

            const generate_btn = document.getElementById(mode + '2img_generate')

            const box = generate_btn.parentElement
            box.style.padding = '10px'

            const result = document.getElementById(mode + '2img_results')
            result.parentNode.querySelector('.resize-handle').remove()

            const top_row = document.getElementById(mode + '2img_toprow')
            top_row.append(result)

            const jump = generate_btn.cloneNode()
            jump.innerHTML = 'Jump To Top'

            jump.addEventListener('click', () => window.scrollTo(0, 0))

            jump.style.position = 'relative'
            jump.style.minHeight = '2.5em'
            jump.style.width = '80%'
            jump.style.left = '10%'
            jump.style.margin = '1em 0px 0px 0px'

            const tab = document.getElementById('tab_' + mode + '2img')
            tab.appendChild(jump)
        })
    }
}

onUiLoaded(async () => OnTheGo.main())
