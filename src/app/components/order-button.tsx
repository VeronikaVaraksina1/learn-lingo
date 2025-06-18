import clsx from 'clsx';
import Button from './button';

interface OrderButtonProps {
  onClick?: () => void;
  isOpenReview: boolean;
}

export default function OrderButton({
  isOpenReview,
  ...rest
}: OrderButtonProps) {
  return (
    <Button
      {...rest}
      type="button"
      className={clsx(
        'w-[232px] px-12 py-4 bg-red red-button-hover rounded-xl font-bold',
        isOpenReview ? 'block' : 'hidden'
      )}
    >
      Book trial lesson
    </Button>
  );
}
