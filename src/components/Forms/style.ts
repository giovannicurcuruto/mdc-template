
import styled from "styled-components";


export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.875rem; /* text-3xl */
  font-weight: 700;   /* font-bold */
  text-decoration: underline;
`;

export const FormWrapper = styled.div`
  max-width: 32rem; /* max-w-2xl */
  margin: 0 auto;   /* mx-auto */
  padding: 1.5rem;  /* p-6 */
  background-color: #ffffff; /* bg-white */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06); /* shadow-md */
  border-radius: 0.5rem; /* rounded-lg */
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr; /* grid-cols-1 */
  gap: 1.5rem; /* gap-6 */
`;

export const Label = styled.label`
  font-size: 0.875rem; /* text-sm */
  font-weight: 600;   /* font-semibold */
  color: #4a5568; /* text-gray-700 */
`;

export const Input = styled.input`
  margin-top: 0.5rem; /* mt-2 */
  padding: 0.75rem; /* p-3 */
  border: 1px solid #d2d6dc; /* border-gray-300 */
  background-color: #f7fafc; /* bg-gray-100 */
  border-radius: 0.5rem; /* rounded-lg */
  outline: none;
  &:focus {
    border-color: #4299e1; /* ring-blue-500 */
    box-shadow: 0 0 0 2px #ebf8ff; /* focus:ring-2 */
  }
`;

export const Textarea = styled.textarea`
  margin-top: 0.5rem; /* mt-2 */
  padding: 0.75rem; /* p-3 */
  border: 1px solid #d2d6dc; /* border-gray-300 */
  background-color: #f7fafc; /* bg-gray-100 */
  border-radius: 0.5rem; /* rounded-lg */
  outline: none;
  &:focus {
    border-color: #4299e1; /* ring-blue-500 */
    box-shadow: 0 0 0 2px #ebf8ff; /* focus:ring-2 */
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  margin-top: 1rem; /* mt-4 */
  padding: 0.75rem 1.5rem; /* px-6 py-3 */
  background-color: #4299e1; /* bg-blue-500 */
  color: #ffffff;
  font-weight: 600; /* font-semibold */
  border-radius: 0.5rem; /* rounded-lg */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06); /* shadow-md */
  outline: none;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #2b6cb0; /* hover:bg-blue-600 */
  }
  &:focus {
    box-shadow: 0 0 0 2px #ebf8ff; /* focus:ring-2 */
    border-color: #4299e1; /* focus:ring-blue-500 */
  }
`;