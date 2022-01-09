
const inputs = document.querySelectorAll('.controls input');

function changeCSS() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', changeCSS));
inputs.forEach(input => input.addEventListener('mousemove', changeCSS));