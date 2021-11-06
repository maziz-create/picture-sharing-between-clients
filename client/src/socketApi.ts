//socket serverimiz ile react'ı bağlıyoruz.
import io, { Socket } from 'socket.io-client';

//yeni bir tip üretmek istemedim, react-images-uploading modülünün ürettiği tipi kullandım.
import { ImageListType } from "react-images-uploading";

let socket: Socket;
let initializedImageList: ImageListType = [];

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

//data göndereceğimiz fonksion
export const send = (imageList: ImageListType) => {
    initializedImageList = imageList;

    if (initializedImageList && initializedImageList[0]) {
        socket.emit('newImage', initializedImageList)
    };
};

//ilk bağlanan kişiye default image göstermeyi amaçlıyoruz.
export const subscribe = (cb: Function) => {
    socket.on('default', (defaultImage) => {
        cb(defaultImage);
    });
};