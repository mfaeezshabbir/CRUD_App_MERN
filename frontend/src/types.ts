// types.ts
export interface Student {
  studentId: string;
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  gender: string;
  phoneNumber: string;
  address: string;
  program: string;
  department: string;
}

export interface StudentFormModalProps {
  student?: Student | null;
  onSubmit: (student: Student) => void;
  onClose: () => void;
}

export interface ConfirmationDialogProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}
