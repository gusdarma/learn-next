export default function Badge({ title, description, srcImage }) {
  return (
    <div class="p-10 max-w-sm mx-auto bg-black rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img
          class="h-12 w-12 rounded-xl"
          src={srcImage}
          alt="ChitChat Logo"
        ></img>
      </div>
      <div>
        <div class="text-xl font-medium text-white">{title}</div>
        <p class="text-gray-500">{description}</p>
      </div>
    </div>
  );
}
