// variables

const detallesProducto = document.getElementById('detalles-del-producto');

// objeto para mostrar descripción de cada producto
const productosD = {
    producto1: 'Las rosas, símbolo de amor y gratitud, son el regalo perfecto para transmitir emociones profundas. Un hermoso arreglo de rosas no solo resalta la belleza natural, sino que también simboliza el aprecio y la pasión. Regala un toque de elegancia y sentimientos auténticos con nuestras hermosas creaciones de arreglos de rosas, perfectas para celebrar cualquier ocasión especial.',
    producto2: 'Sumérgete en la dulce indulgencia con nuestro exquisito ramo de fresas bañadas en chocolate. Cada jugosa fresa ha sido cuidadosamente seleccionada y cubierta a mano con una capa sedosa de chocolate gourmet. ',
    producto3: 'Presentamos una exquisita y encantadora ancheta que combina la frescura de las rosas con la delicia de las frutas y otros elementos cuidadosamente seleccionados. Este regalo es un festín para los sentidos, donde la elegancia de las delicadas rosas se entrelaza con la frescura jugosa de una variedad de frutas exóticas y de temporada.',
    producto4: 'Este encantador regalo está repleto de una deliciosa selección de golosinas cuidadosamente elegidas para satisfacer los antojos más dulces. Desde exquisitos chocolates hasta golosinas clásicas, cada elemento ha sido seleccionado para brindar momentos de pura alegría y felicidad. Además, nuestra adorable y suave mascota de peluche es el compañero perfecto para abrazar y compartir momentos especiales. ',
    producto5: 'Explora el mundo de los sabores y la diversión con nuestra cautivadora cajita de cervezas. Esta caja cuidadosamente seleccionada reúne una variedad de cervezas artesanales y de renombre que ofrecen una experiencia sensorial única para los amantes de la cerveza.',
    producto6: 'Regala un mundo de elegancia y placer con nuestro exquisito obsequio que combina la belleza atemporal de las rosas con la exquisitez de un vino selecto y los deliciosos chocolates Ferrero. Cada rosa ha sido seleccionada a mano por su belleza y frescura, transmitiendo un mensaje de amor y aprecio. El vino, con su sabor refinado y sofisticado, complementa a la perfección la delicadeza de las rosas, mientras que los chocolates Ferrero añaden un toque de indulgencia y placer.'
};

const productosKeys = Object.keys(productosD);

// evento para mostrar descripción del producto
productosKeys.forEach(function(key) {
    document.getElementById(key).addEventListener('click', function() {
        detallesProducto.innerHTML = productosD[key];
    });
});

