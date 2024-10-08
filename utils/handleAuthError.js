import toast from "react-hot-toast";

export const handleAuthError = (error) => {
  switch (error.code) {
    case 'auth/invalid-email':
      toast.error('Invalid email format.');
      break;

    case 'auth/email-already-in-use':
      toast.error('An account is already registered for this email');
      break;

    case 'auth/user-disabled':
      toast.error('This user account has been disabled.');
      break;

    case 'auth/user-not-found':
      toast.error('No user found with this email.');
      break;

    case 'auth/wrong-password':
      toast.error('Incorrect password or email.');
      break;

		case 'auth/invalid-credential':
			toast.error('Incorrect password or email.');
			break;

    default:
      toast.error('An unknown error occurred. Please try again.');
  }
};
