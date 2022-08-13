use std::net::{TcpStream, TcpListener};
use std::io::{Read, Write};
use std::thread;


fn handle_read(mut stream: &TcpStream) {
    let mut buf = [0u8 ;4096];
    stream.read(&mut buf);
}

fn handle_write(mut stream: TcpStream) {
    let response = b"HTTP/1.1 200\r\n\r\nHello, World!";
    stream.write(response);
}

fn handle_client(stream: TcpStream) {
    handle_read(&stream);
    handle_write(stream);
}

fn main() {
    let listener = TcpListener::bind("127.0.0.1:3000").unwrap();

    for stream in listener.incoming() {
        match stream {
            Ok(stream) => {
                thread::spawn(|| {
                    handle_client(stream)
                });
            }
            Err(..) => {}
        }
    }
}