'use client';

import Image from 'next/image';
import { Teacher } from '../teachers/page';
import Button from './button';
import { RadioButton } from './ui/inputs/radio-button';
import { TextInput } from './ui/inputs/text-input';
import { Controller, useForm } from 'react-hook-form';
import { useAuthContext } from './auth-provider';
import { yupResolver } from '@hookform/resolvers/yup';
import { orderSchema } from '../schemas/schemas';
import MiniLoader from './mini-loader';
import { ErrorMessages } from './error-messages';
import { cleanString } from '../../../utils/fieldFormatters';

interface OrderFormProps {
  teacherData: Teacher;
  isLoadingSubmit: boolean;
  onCloseModal: () => void;
  handleToggleWindow: () => void;
}

type EnglishReason = 'career' | 'kids' | 'abroad' | 'exams' | 'hobby';

type FormValues = {
  full_name: string;
  email: string;
  phone_number: string;
  englishReason: EnglishReason;
};

const defaultValues: FormValues = {
  full_name: '',
  email: '',
  phone_number: '',
  englishReason: '' as unknown as EnglishReason,
};

export const OrderForm = ({
  teacherData,
  isLoadingSubmit,
  handleToggleWindow,
  onCloseModal,
}: OrderFormProps) => {
  const { id, name, surname, avatar_url } = teacherData;
  const { currentUser } = useAuthContext();
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(orderSchema),
  });

  const onSubmit = (data: FormValues) => {
    const updatedData = {
      ...data,
      full_name: cleanString(data.full_name),
      teacher_id: id,
      user_id: currentUser?.uid,
    };

    console.log(updatedData);

    handleToggleWindow();
  };

  return (
    <div className="p-16">
      <Button
        type={'button'}
        onClick={onCloseModal}
        className="absolute top-5 right-5 stroke-black"
      >
        <svg width={32} height={32}>
          <use href="/icons/icons.svg#icon-close"></use>
        </svg>
      </Button>
      <div className="mb-5">
        <h2 className="font-medium text-[40px] leading-tight tracking-tight mb-5">
          Book trial lesson
        </h2>
        <p className="max-w-[472px] leading-snug text-text-color-muted">
          Our experienced tutor will assess your current language level, discuss
          your learning goals, and tailor the lesson to your specific needs.
        </p>
      </div>
      <div className="flex gap-[14px] mb-10">
        <Image
          className="rounded-[100px]"
          src={avatar_url}
          alt={`photo of ${name} ${surname}`}
          width={44}
          height={44}
          quality={100}
          priority={true}
        />
        <div>
          <p className="font-medium text-xs text-text-color-gray leading-snug">
            Your teacher
          </p>
          <p className="font-medium text-base leading-6">{`${name} ${surname}`}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="mb-10">
          <legend className="font-medium text-2xl leading-7 mb-5">
            What is your main reason for learning English?
          </legend>
          <Controller
            name="englishReason"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-4 relative">
                <RadioButton
                  {...field}
                  label="Career and business"
                  value="career"
                />
                <RadioButton {...field} label="Lesson for kids" value="kids" />
                <RadioButton {...field} label="Living abroad" value="abroad" />
                <RadioButton
                  {...field}
                  label="Exams and coursework"
                  value="exams"
                />
                <RadioButton
                  {...field}
                  label="Culture, travel or hobby"
                  value="hobby"
                />
                {fieldState.error && (
                  <ErrorMessages styles="left-[10px] bottom-[-18px]">
                    {fieldState.error.message}
                  </ErrorMessages>
                )}
              </div>
            )}
          />
        </fieldset>
        <fieldset className="flex flex-col gap-[18px] mb-10">
          <Controller
            name="full_name"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                {...field}
                type="text"
                placeholder="Full Name"
                errorMessage={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                {...field}
                type="email"
                placeholder="Email"
                errorMessage={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="phone_number"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                {...field}
                type="tel"
                name="phone_number"
                placeholder="Phone number (UA, +380)"
                errorMessage={fieldState.error?.message}
              />
            )}
          />
        </fieldset>
        <Button
          type="submit"
          className="w-full py-4 min-h-[60px] rounded-xl mx-auto bg-red font-bold text-lg leading-normal red-button-hover mb-5"
        >
          {isLoadingSubmit ? <MiniLoader /> : 'Book'}
        </Button>
      </form>
    </div>
  );
};
