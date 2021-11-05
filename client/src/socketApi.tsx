//socket serverimiz ile react'ı bağlıyoruz.
import io from 'socket.io-client';

let socket;

export const init = () => {
    console.log("Sunucuya bağlanılıyor...");

    /*
    backendi ayağa kaldırdığımız adresi ve portu vermeliyiz.
    localde çalıştığımız için bu endpoint verildi.
    */
    socket = io("http://localhost:8081", {
        transports: ["websocket"],
    });

    socket.on("connect", () => {
        console.log("Sunucuya bağlantı başarıyla gerçekleşti.");

    });
};