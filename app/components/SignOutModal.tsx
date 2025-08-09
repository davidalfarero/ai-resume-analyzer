export const SignOutModal = ({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-white dark:bg-secondary text-black dark:text-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4">
      <h2 className="text-lg font-semibold constant-gradient">
        Confirm Sign Out
      </h2>
      <p className="text-light">Are you sure you want to sign out?</p>
      <div className="flex justify-end gap-4">
        <button onClick={onCancel} className="secondary-button w-fit">
          Cancel
        </button>
        <button onClick={onConfirm} className="primary-button w-fit">
          Sign Out
        </button>
      </div>
    </div>
  </div>
);
