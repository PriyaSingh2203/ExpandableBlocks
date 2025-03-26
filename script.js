function expandBlock(blockNumber) {
    const block = document.getElementById('block' + blockNumber);
    const allBlocks = document.querySelectorAll('.block');

    // Close all other blocks except the one being clicked
    allBlocks.forEach(b => {
        if (b !== block) {
            b.classList.remove('expanded');
        }
    });

    // Always expand the clicked block (never shrink it)
    block.classList.add('expanded');
}

// Prevent dropdowns from collapsing the block
document.querySelectorAll('select').forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
        event.stopPropagation(); // Stops the click from reaching the block
    });
});
