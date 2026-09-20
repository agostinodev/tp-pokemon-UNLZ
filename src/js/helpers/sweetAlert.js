

export const sweetAlert = ( text, icon) => {
    
    Swal.fire({
            text: `${text}`,
            icon: `${icon}`
        });
}
