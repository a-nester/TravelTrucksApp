import toast from 'react-hot-toast';

export const errorHandler = error => {
  (error.statusCode === 404 &&
    toast.error('Campers not found. Try enouther filters please')) ||
    (error.statusCode === 500 &&
      toast.error('Server error. Please try again later')) ||
    toast.error(error.message);
};
