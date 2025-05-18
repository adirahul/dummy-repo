
const Tabs = () => {
  return (
    <div className="pl-10 pt-10">
      <div className="sm:hidden">
        <label htmlFor="Tab" className="sr-only">
          Tab
        </label>

        <select id="Tab" className="w-full rounded-2xl border-gray-200">
          <option>Settings</option>
          <option>Messages</option>
          <option>Archive</option>
          <option>Notifications</option>
          <option>Settings</option>
          <option>Messages</option>
          <option>Archive</option>
          <option>Notifications</option>
        </select>
      </div>

      <div className="hidden sm:block">
        <nav className="flex gap-6" aria-label="Tabs">
          <a
            href="#"
            className="shrink-0 rounded-2xl p-2 text-black text-sm font-sm bg-gray-200 hover:text-white hover:bg-blue-500"
          >
            Settings
          </a>

          <a
            href="#"
            className="shrink-0 rounded-2xl p-2 text-black text-sm font-sm bg-gray-200 hover:text-white hover:bg-blue-500"
          >
            Messages
          </a>

          <a
            href="#"
            className="shrink-0 rounded-2xl p-2 text-black text-sm font-sm bg-gray-200 hover:text-white hover:bg-blue-500"
          >
            Archive
          </a>

          <a
            href="#"
            className="shrink-0 rounded-2xl p-2 text-black text-sm font-sm bg-gray-200 hover:text-white hover:bg-blue-500"
            aria-current="page"
          >
            Notifications
          </a>
          <a
            href="#"
            className="shrink-0 rounded-2xl p-2 text-black text-sm font-sm bg-gray-200 hover:text-white hover:bg-blue-500"
          >
            Settings
          </a>

          <a
            href="#"
            className="shrink-0 rounded-2xl p-2 text-black text-sm font-sm bg-gray-200 hover:text-white hover:bg-blue-500"
          >
            Messages
          </a>

          <a
            href="#"
            className="shrink-0 rounded-2xl p-2 text-black text-sm font-sm bg-gray-200 hover:text-white hover:bg-blue-500"
          >
            Archive
          </a>

          <a
            href="#"
            className="shrink-0 rounded-2xl p-2 text-black text-sm font-sm bg-gray-200 hover:text-white hover:bg-blue-500"
            aria-current="page"
          >
            Notifications
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
