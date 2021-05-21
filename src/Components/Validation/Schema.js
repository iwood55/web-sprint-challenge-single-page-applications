import * as yup from 'yup'

export default yup.object().shape({
    size: yup
        .string(),
    sauce: yup
        .string()
        .oneOf(['Pizza Sauce', 'Barbecue', 'Alfredo'], 'sauce is required'),
    Pepperoni: yup
        .boolean(),
    Sausage: yup
        .boolean(),
    Bacon: yup
        .boolean(),
    Chicken: yup
        .boolean(),
    Onions: yup
        .boolean(),
    Peppers: yup
        .boolean(),
    Salt: yup
        .boolean(),
    Oregano: yup
        .boolean(),
    name: yup
        .string()
        .min(2, "Name must include 2 letters")
        .required("Name is required"),
    instructions: yup
        .string()
})