// import React from "react";
// import style from "./ClientForm.module.css";

// const ClientForm = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default ClientForm

// import ClientService from "../../../services/ClientService";
// import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import Label from "../../01 uikit/Label/Label";
// import { Select } from "../../01 uikit/Select/Select";

// const ClienteForm = () => {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm();

//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     const client = data;
//     ClientService.createClient(client);
//     navigate("/listar-cliente");
//     console.log(client);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit)} className={style.form_cliente}>
//         <div className={style.input_cliente}>
//           <Label d="label" label={"Cuit"} />
//           <input
//             type="number"
//             {...register("cuit", {
//               required: true,
//               maxLength: 11,
//             })}
//           />
//           {errors.cuit?.type === "required" && <p>El campo es requerido</p>}
//           {errors.cuit?.type === "maxLength" && <p>Maximo de 11 numeros</p>}
//         </div>
//         <div className="input-cliente">
//           <Label id="label" label={"Razón Social"} />
//           <input
//             type="text"
//             {...register("razonSocial", {
//               required: true,
//             })}
//           />
//           {errors.razonSocial?.type === "required" && (
//             <p>El campo es requerido</p>
//           )}
//         </div>

//         {/* select de areas */}
//         <div className="input-cliente">
//           <Label id="label" label={"Area"} />
//           <Select {...register("area")}>
//             <option value="sur">Sur</option>
//             <option value="norte">Norte</option>
//             <option value="centro">Centro</option>
//           </Select>
//         </div>

//         <div className="input-cliente">
//           <Label id="label" label={"Nombre Fantasia"} />
//           <input
//             type="text"
//             {...register("nombreFantasia", {
//               required: true,
//             })}
//           />
//           {errors.nombreFantasia?.type === "required" && (
//             <p>El campo es requerido</p>
//           )}
//         </div>
//         <div className="input-cliente">
//           <Label id="label" label={"Contacto"} />
//           <input
//             type="text"
//             {...register("nombreContacto", {
//               required: true,
//             })}
//           />
//           {errors.nombreContacto?.type === "required" && (
//             <p>El campo es requerido</p>
//           )}
//         </div>
//         <div className="input-cliente">
//           <Label id="label" label={"Telefono"} />
//           <input
//             type="number"
//             {...register("telefono", {
//               required: true,
//               maxLength: 10,
//             })}
//           />
//           {errors.telefono?.type === "required" && <p>El campo es requerido</p>}
//           {errors.telefono?.type === "maxLength" && <p>Maximo de 10 numeros</p>}
//         </div>
//         <div className="input-cliente">
//           <Label id="label" label={"Email"} />
//           <input
//             type="text"
//             {...register("mail", {
//               required: true,
//               pattern: /^\S+@\S+\.\S+$/,
//             })}
//           />
//           {errors.mail?.type === "required" && <p>El campo es requerido</p>}
//           {errors.mail?.type === "pattern" && <p>No corresponde a un email</p>}
//         </div>
//         <input className="form-control-s" type="submit" value="Guardar" />
//       </form>
//     </>
//   );
// };

// export default ClienteForm;
