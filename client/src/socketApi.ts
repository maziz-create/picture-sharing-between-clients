//socket serverimiz ile react'ı bağlıyoruz.
import io, { Socket } from 'socket.io-client';

//yeni bir tip üretmek istemedim, react-images-uploading modülünün ürettiği tipi kullandım.
import { ImageListType } from "react-images-uploading";

let socket: Socket = io("http://localhost:8081", {
    transports: ["websocket"],
    reconnectionDelay: 10000, //10 saniyede bir bağlanmayı dener.
})

let initializedImageList: ImageListType = [];

export const init = () => {
    console.log("Sunucuya bağlanılıyor...");
    socket.on("connect", () => {
        console.log("Sunucuya bağlantı başarıyla gerçekleşti.");
    });
};

//data göndereceğimiz fonksion
export const send = (imageList: ImageListType) => {
    initializedImageList = imageList;
    socket.emit('newImage', initializedImageList)
};

//ilk bağlanan kişiye default image göstermeyi amaçlıyoruz.
export const subscribe = (cb: Function) => {
    socket.on('default', (defaultImage) => {
        cb(defaultImage);
    });
};

//diğer client'ın gönderdiği, receive kanalından broadcast emit edilen image array'ı isteyen componente döndürüyoruz.
export const receiveImage = (cb: Function) => {
    socket.on('receive', (imageList: ImageListType) => {
        cb(imageList);
    });
};