export default function NewJokeRoute() {
    return (
      <div class="bg-amber-600">
        <p>Add your own hilarious joke</p>
        <form method="post">
          <div>
            <label>
              Name: <input type="text" name="name" class="border-2 border-violet-500" />
            </label>
          </div>
          <div>
            <label>
              Content: <textarea name="content" class="border-2 border-violet-500	" />
            </label>
          </div>
          <div>
            <button type="submit" class="bg-green-400">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }