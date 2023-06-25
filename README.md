# la_gruta

--------------------------------------------->><RUTAS><<---------------------------------------------

------------------------------>><USERS><<------------------------------

GET	    /user/  		    Obtener todos los usuarios.
GET	    /user/:id_user  	Obtener usuario por id.

------------------------------>><ACTIVITIES><<------------------------------

GET	    /activity/ 		        Obtener todas las actividades o noticias.
GET	    /activity/:id  		    Obtener noticia por id.
POST	/activity/  		    Crear noticia. ---> { name, description, type_activity, date, img }
DELETE	/activity/:id_activity  Eliminar noticia.

------------------------------>><PRODUCTS><<------------------------------

GET	    /products/			            Obtener todos los productos.
GET	    /products/id_products 		    Obtener producto por ID (para detalle).
POST 	/products/create		        Crear un nuevo producto. ---> {name, price, image, description, stock, type}
POST	/products/restore/:id		    Restaurar un producto eliminado.
PUT	    /products/update/:id_products 	Modificar un producto.
DELETE	/products/delete/:id		    Eliminar un producto (Borrado lógico).

------------------------------>><CHILDREN><<------------------------------

GET	    /children/	Obtener todos los niños.	
POST	/children/	Agregar un nuevo niño. ---> { name, edad, history, image }
DELETE	/children/	Eliminar un niño de la base de datos.

------------------------------>><PRODUCTS><TYPE><<------------------------------

GET 	/productsTypes/		Obtener todos los tipos de productos.

------------------------------>><ACTIVITY><TYPE><<------------------------------

GET	    /activityTypes/	    Obtener todos los tipos de actividades/eventos/noticias.

------------------------------>><FILTER><PRODUCTS><<------------------------------

GET	    /filter/byType?name=(...)	Filtrar productos por su tipo.
GET	    /filter/name?name=(...)		Filtrar productos por nombre.

------------------------------>><FILTER><ACTIVITY><<------------------------------

GET 	/filter_activity/byType?name=(...)	Filtrar actividades y eventos por su tipo.
GET	    /filter_activity/name?name=(...)	Filtrar actividades y eventos por nombre.

------------------------------>><ORDER><PRODUCTS><<------------------------------

GET 	/order/byPrice			Ordenar productos por su precio.

------------------------------>><PAYMENT><<------------------------------

GET	    /payment/cart/create-order/:user_id	        Orden de pago.

------------------------------>><CART><<------------------------------

GET	    /cart/:user_id		Mostrar el carrito de compras del usuario.
POST	/cart/add		    Agregar un producto al carrito del usuario.