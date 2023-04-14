let usuarios = [
  {
    id: 1,
    nombre: "Melina",
    apellido: "Pardo",
    identificacion: 0987654321,
    correo: "melina@gmail.com",
    contraseña: "12345",
  },
  {
    id: 2,
    nombre: "Diego",
    apellido: "Benavides",
    identificacion: 1001001001,
    correo: "Diego@gmail.com",
    contraseña: "12345",
  },
  {
    id: 3,
    nombre: "Markus",
    apellido: "Romero",
    identificacion: 1003003031,
    correo: "Markus@gmail.com",
    contraseña: "12345",
  },
];

const crearUsuario = async () => {
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let identificacion = document.getElementById("identificacion").value;
  let psw = document.getElementById("psw").value;
  var isRegistered = false;

  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].identificacion == identificacion) {
      isRegistered = true;
      break;
    }
  }

  if (email.includes("@") && email.includes(".")) {
    if (isRegistered) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El usuario ya se encuentra registrado",
      });
    } else {
      if (
        name != "" &&
        lastName != "" &&
        identificacion != "" &&
        identificacion > 0 &&
        email != "" &&
        psw != ""
      ) {
        let usuario = {
          id: usuarios.length + 1,
          nombre: name,
          apellido: lastName,
          identificacion: identificacion,
          correo: email,
          contraseña: psw,
        };

        await usuarios.push(usuario);
        listar();
        backToTheBasics();

        Swal.fire({
          title: "Usuario creado correctamente",
          width: 600,
          padding: "3em",
          color: "#716add",
          background: "#fff url(/images/trees.png)",
          backdrop: `
            rgba(0,0,123,0.4)
            url("/images/nyan-cat.gif")
            left top
            no-repeat
          `,
        });
      } else if (identificacion <= 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "La identificacion debe ser igual o mayor a 1 xd!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Campos vacios!",
        });
      }
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Fornato de correo Invalido",
    });
  }
};

const backToTheBasics = () => {
  document.getElementById("name").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("identificacion").value = "";
  document.getElementById("psw").value = "";
};

const listar = () => {
  let table = "";

  for (let i = 0; i < usuarios.length; i++) {
    table =
      table +
      `
      <tr class="text-center">
          <th scope="row ">${usuarios[i].id} </th>
          <td> ${usuarios[i].nombre} </td>
          <td> ${usuarios[i].apellido} </td>
          <td> ${usuarios[i].identificacion} </td>
          <td> ${usuarios[i].correo} </td>
          <td> ${usuarios[i].contraseña} </td>
      </tr>
      `;
  }
  const tbody = document.querySelector("#tbody");
  tbody.innerHTML = table;
};

listar();
