import Button from './button';

interface MessagePopupProps {
  title: string;
  description: string;
  onCloseModal: () => void;
}

export const MessageWindow = ({
  title,
  description,
  onCloseModal,
}: MessagePopupProps) => {
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
      <h3 className="font-medium text-[24px] leading-tight tracking-tight mb-5">
        {title}
      </h3>
      <p className="max-w-[472px] leading-snug text-text-color-muted">
        {description}
      </p>
    </div>
  );
};
