const detailsElements = document.querySelectorAll('details');

Array.from(detailsElements).forEach((details) => {
  details.addEventListener('toggle', () => {
    const plusIcon = details.querySelector('.plus-icon');
    const minusIcon = details.querySelector('.minus-icon');

    if (details.open) {
      plusIcon.className = 'plus-icon hide';
      minusIcon.className = 'minus-icon';
    } else {
      plusIcon.className = 'plus-icon';
      minusIcon.className = 'minus-icon hide';
    }
  });
});
