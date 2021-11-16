let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', (firstEvent) => {
        const styles = firstEvent.currentTarget.classList;

        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else if (styles.contains('double')) {
            count *= 2;
        }
        else if (styles.contains('undouble')) {
            count /= 2;
        }
        else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = 'green';
        }
        else if (count < 0) {
            value.style.color = 'red';
        }
        else {
            value.style.color = '#222';
        }

        value.textContent = count;
    });
});