//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Messenger {
    string private message;
    struct User{
        string email;
        string pass;
        string wallet;
        string[] playListsInscrito;
    }
     struct PlayList{
        string emailOwner;
        string nombre;
        string descripcion;
        string listaCanciones;
        string price;
        string wallet;
    }
    PlayList[] public playlists;
    User[] public usuarios;

    constructor(string memory _message) {
        console.log("Deploying a Greeter with greeting:", _message);
        message = _message;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function setMessage(string memory _message) public {
        console.log("Changing greeting from '%s' to '%s'", message, _message);
        message = _message;
    }

    // Función para agregar un usuario 
    function agregarUsuario(string memory _email, string memory _pass, string memory _wallet) public returns(string memory) {
        // Verificar si el correo electrónico ya existe
        for (uint256 i = 0; i < usuarios.length; i++) {
            if (keccak256(abi.encodePacked(usuarios[i].email)) == keccak256(abi.encodePacked(_email))) {
                return "El correo electronico ya existe..";
            }
        }

        string[] memory _playListsInscrito = new string[](1); // Declare a dynamic array with a length of 2
        _playListsInscrito[0] = "PlayListDePrueba"; // Assign values to the array
        // Si el correo electrónico no existe, agregar un nuevo usuario
        usuarios.push(User({email: _email, pass: _pass, wallet: _wallet, playListsInscrito: _playListsInscrito}));
        return "Usuario agregado exitosamente.";
    }

     // Función para identificar un usuario
    function identificarUsuario(string memory _emailUsuario, string memory _passUsuario) public {
        // Verificar si el correo electrónico ya existe
        for (uint256 i = 0; i < usuarios.length; i++) {
            if (keccak256(abi.encodePacked(usuarios[i].email)) == keccak256(abi.encodePacked(_emailUsuario))) {
                if(keccak256(abi.encodePacked(usuarios[i].pass)) == keccak256(abi.encodePacked(_passUsuario))){
                    message = "Identificacion de usuario exitosa.";
                    return;
                }
            } 
        }
        message = "Credenciales no reconocidas, por favor intente nuevamente.";
    }

    // Función para agregar una playlist
    function agregarPlayList(string memory _emailOwner, string memory _nombre, string memory _descripcion, string memory _listaCanciones, string memory _price, string memory _wallet) public {
        // Verificar si el correo electrónico ya existe
        for (uint256 i = 0; i < playlists.length; i++) {
            if (keccak256(abi.encodePacked(playlists[i].nombre)) == keccak256(abi.encodePacked(_nombre))) {
                message = "El nombre de esta PlayList ya existe.";
                return;
            }
        }
        
        // Si el nombr3 de la play list no existe
        playlists.push(PlayList({emailOwner: _emailOwner, nombre: _nombre, descripcion: _descripcion, listaCanciones: _listaCanciones, price: _price, wallet: _wallet}));
        message = "PlayList agregada exitosamentes.";
    }

    function suscribirsePlayList(string memory _nombrePlayList, string memory _correoUsuarioCliente) public {
        // Verificar si el correo electrónico ya existe
        for (uint256 i = 0; i < usuarios.length; i++) {
             if (keccak256(abi.encodePacked(usuarios[i].email)) == keccak256(abi.encodePacked(_correoUsuarioCliente))) {
                //aquí se realiza la tranferencia transferfrom del contrato inteligente
                usuarios[i].playListsInscrito.push(_nombrePlayList);
                return;
            }
        }
    }

    function obtenerPlayList() public view returns (PlayList[] memory) {
        //PlayList[] memory lista = playlists;
        return playlists;
    }
}
