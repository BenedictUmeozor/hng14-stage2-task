export function ThemeShowcase() {
  return (
    <div className="p-8 bg-accent-bg dark:bg-dark-bg min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-neutral-dark dark:text-neutral-lightest">
        Theme Colors Showcase
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Primary Colors */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-neutral-dark dark:text-neutral-lightest mb-4">
            Primary Colors
          </h2>
          <div className="bg-primary-light p-4 rounded-lg">
            <p className="text-white font-medium">#7C5DFA</p>
            <p className="text-white text-sm">primary-light</p>
          </div>
          <div className="bg-primary p-4 rounded-lg">
            <p className="text-white font-medium">#9277FF</p>
            <p className="text-white text-sm">primary</p>
          </div>
          <div className="bg-primary-dark p-4 rounded-lg">
            <p className="text-white font-medium">#1E2139</p>
            <p className="text-white text-sm">primary-dark</p>
          </div>
          <div className="bg-primary-darker p-4 rounded-lg">
            <p className="text-white font-medium">#252945</p>
            <p className="text-white text-sm">primary-darker</p>
          </div>
        </div>

        {/* Neutral Colors */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-neutral-dark dark:text-neutral-lightest mb-4">
            Neutral Colors
          </h2>
          <div className="bg-neutral-lightest p-4 rounded-lg">
            <p className="text-neutral-dark font-medium">#DFE3FA</p>
            <p className="text-neutral-dark text-sm">neutral-lightest</p>
          </div>
          <div className="bg-neutral-light p-4 rounded-lg">
            <p className="text-white font-medium">#888EB0</p>
            <p className="text-white text-sm">neutral-light</p>
          </div>
          <div className="bg-neutral p-4 rounded-lg">
            <p className="text-white font-medium">#7E88C3</p>
            <p className="text-white text-sm">neutral</p>
          </div>
          <div className="bg-neutral-dark p-4 rounded-lg">
            <p className="text-white font-medium">#0C0E16</p>
            <p className="text-white text-sm">neutral-dark</p>
          </div>
        </div>

        {/* Accent Colors */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-neutral-dark dark:text-neutral-lightest mb-4">
            Accent Colors
          </h2>
          <div className="bg-accent-red p-4 rounded-lg">
            <p className="text-white font-medium">#EC5757</p>
            <p className="text-white text-sm">accent-red</p>
          </div>
          <div className="bg-accent-pink p-4 rounded-lg">
            <p className="text-white font-medium">#FF8F8F</p>
            <p className="text-white text-sm">accent-pink</p>
          </div>
          <div className="bg-accent-bg p-4 rounded-lg border border-neutral-light">
            <p className="text-neutral-dark font-medium">#F8F8FB</p>
            <p className="text-neutral-dark text-sm">accent-bg</p>
          </div>
        </div>

        {/* Dark Mode Specific */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-neutral-dark dark:text-neutral-lightest mb-4">
            Dark Mode
          </h2>
          <div className="bg-dark-bg p-4 rounded-lg">
            <p className="text-white font-medium">#141625</p>
            <p className="text-white text-sm">dark-bg</p>
          </div>
          <div className="bg-dark-card p-4 rounded-lg">
            <p className="text-white font-medium">#1E2139</p>
            <p className="text-white text-sm">dark-card</p>
          </div>
        </div>
      </div>

      {/* Example Cards */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-neutral-dark dark:text-neutral-lightest mb-4">
          Example Components
        </h2>
        
        <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-neutral-dark dark:text-neutral-lightest mb-2">
            Card Component
          </h3>
          <p className="text-neutral-light dark:text-neutral mb-4">
            This card demonstrates how the theme adapts to dark mode.
          </p>
          <button className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg transition-colors">
            Primary Button
          </button>
        </div>

        <div className="bg-white dark:bg-dark-card p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-neutral-dark dark:text-neutral-lightest mb-2">
            Status Indicators
          </h3>
          <div className="flex gap-4">
            <span className="bg-accent-red text-white px-3 py-1 rounded-full text-sm">
              Error
            </span>
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
              Info
            </span>
            <span className="bg-neutral-light text-white px-3 py-1 rounded-full text-sm">
              Neutral
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
