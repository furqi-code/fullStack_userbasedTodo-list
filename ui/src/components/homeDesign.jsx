export function HomeDesign() {
  return (
    <>
      <main class="max-w-6xl mx-auto px-4 py-8">
        <div class="flex flex-col lg:flex-row gap-8">
          <div class="flex-1">
            <div class="bg-white rounded-lg border border-gray-200 p-8 lg:p-12">
              <div class="text-center fade-in">
                <div class="empty-state-icon mb-8">
                  <svg
                    class="w-32 h-32 mx-auto text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    ></path>
                  </svg>
                </div>

                <h2 class="text-3xl font-medium text-gray-900 mb-4">
                  Your todo list is empty
                </h2>
                <p class="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                  Start organizing your day by adding your first task. Stay
                  productive and achieve your goals!
                </p>


                <div class="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                  <button
                    onclick="browseTemplates()"
                    class="text-blue-600 hover:text-blue-700 font-medium px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Browse task templates
                  </button>
                  <button
                    onclick="importTasks()"
                    class="text-gray-700 hover:text-gray-900 font-medium px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Import from other apps
                  </button>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h3 class="text-lg font-medium text-gray-900 mb-4">
                Popular task categories
              </h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  onclick="addCategory('work')"
                  class="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all text-left"
                >
                  <div class="text-2xl mb-2">💼</div>
                  <div class="font-medium text-gray-900">Work</div>
                  <div class="text-sm text-gray-500">Professional tasks</div>
                </button>
                <button
                  onclick="addCategory('personal')"
                  class="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all text-left"
                >
                  <div class="text-2xl mb-2">🏠</div>
                  <div class="font-medium text-gray-900">Personal</div>
                  <div class="text-sm text-gray-500">Daily activities</div>
                </button>
                <button
                  onclick="addCategory('health')"
                  class="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all text-left"
                >
                  <div class="text-2xl mb-2">💪</div>
                  <div class="font-medium text-gray-900">Health</div>
                  <div class="text-sm text-gray-500">Fitness & wellness</div>
                </button>
                <button
                  onclick="addCategory('learning')"
                  class="bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all text-left"
                >
                  <div class="text-2xl mb-2">📚</div>
                  <div class="font-medium text-gray-900">Learning</div>
                  <div class="text-sm text-gray-500">Education & skills</div>
                </button>
              </div>
            </div>

            <div class="bg-blue-50 rounded-lg border border-blue-200 mt-4 p-6">
              <h3 class="font-medium text-blue-900 mb-3">💡 Pro tip</h3>
              <p class="text-blue-800 text-sm mb-4">
                Start with 3-5 small tasks to build momentum. You can always add
                more later!
              </p>
              <button
                onclick="showTips()"
                class="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                More productivity tips →
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
