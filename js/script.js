document.addEventListener('DOMContentLoaded', function() {
    console.log('ready');
    
    // Optional click handler for primary buttons
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // No-op click handler
        });
    });
});