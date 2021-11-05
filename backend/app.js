const app = require('express')();
const http = require('http').createServer(app);
const io = require("socket.io")(http);
const cors = require('cors');

app.use(cors); //yapılacak olan http isteklerinde güvenlik problemleri oluşmaması için.

app.get('/', (req, res) => {
    res.send("Merhaba!");
});

let defaultImage = "https://www.ekoparkotomasyon.com/wp-content/public_html/cart/image/data/uploads/2013/12/default-placeholder-300x300.png";

io.on('connection', (socket) => {
    console.log("Bir kullanıcı bağlandı!");

    //yeni bağlanan her kullanıcı default img görecek.
    socket.emit('receive', defaultImage);

    //newImage kanalına bağlantı yapılıyor.
    socket.on('newImage', (newImageArray) => {
        //broadcast farkı: bağlı olan kendi hariç diğer clientlara gönderilmesi
        io.broadcast.emit('receive', newImageArray);
    });

    socket.on("disconnect", () => {
        console.log("Bir kullanıcı ayrıldı!");
    });
});

http.listen(8081, () => console.log("Socket server ayağa kalktı!"));