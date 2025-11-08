# Design System Documentation

## Design Philosophy

The Web3 Skills Tracker follows a clean, minimal, and modern design aesthetic. The focus is on simplicity, whitespace, and smooth user experience.

### Core Principles

1. **Minimal & Clean**: Lots of whitespace, simple layouts, no clutter
2. **Modern & Professional**: Subtle gradients, soft shadows, gentle animations
3. **Typography-focused**: Clear hierarchy, readable fonts, minimal icons
4. **Mobile-first**: Fully responsive, touch-friendly
5. **Performance**: Fast, smooth transitions, no heavy animations

## Color Palette

### Primary Colors

- **Background**: 
  - Light Gray: `#F9FAFB` (bg-gray-50)
  - Medium Gray: `#F3F4F6` (bg-gray-100)

- **Cards & Surfaces**:
  - White: `#FFFFFF` (bg-white)
  - Subtle borders: `#E5E7EB` (border-gray-200)

### Accent Colors

- **Primary (Blue)**:
  - Light: `#3B82F6` (blue-600)
  - Dark: `#2563EB` (blue-700)
  - Background: `#EFF6FF` (blue-50)

- **Secondary (Purple)**:
  - Light: `#8B5CF6` (purple-600)
  - Dark: `#7C3AED` (purple-700)
  - Background: `#F5F3FF` (purple-50)

- **Success (Green)**:
  - Main: `#10B981` (green-500)
  - Background: `#D1FAE5` (green-100)

- **Warning (Yellow)**:
  - Main: `#F59E0B` (yellow-500)

- **Error (Red)**:
  - Main: `#EF4444` (red-400)

### Text Colors

- **Primary Text**: `#111827` (gray-900)
- **Secondary Text**: `#374151` (gray-700)
- **Tertiary Text**: `#6B7280` (gray-500)
- **Disabled Text**: `#9CA3AF` (gray-400)

## Typography

### Font Family

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

### Type Scale

- **4xl**: 36px (Page titles)
- **3xl**: 30px (Section titles)
- **2xl**: 24px (Card titles)
- **xl**: 20px (Subsection titles)
- **lg**: 18px (Large body)
- **base**: 16px (Body text)
- **sm**: 14px (Small text)
- **xs**: 12px (Captions)

### Font Weights

- **Bold**: 700 (Headings, important text)
- **Semibold**: 600 (Subheadings)
- **Medium**: 500 (Emphasized text)
- **Regular**: 400 (Body text)

## Spacing System

Use consistent spacing scale for margins and padding:

- **1**: 4px
- **2**: 8px
- **3**: 12px
- **4**: 16px
- **6**: 24px
- **8**: 32px
- **12**: 48px
- **16**: 64px

## Components

### Buttons

#### Primary Button
```jsx
<button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
  Button Text
</button>
```

#### Secondary Button
```jsx
<button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
  Button Text
</button>
```

#### Ghost Button
```jsx
<button className="text-blue-600 hover:text-blue-700 font-medium">
  Button Text
</button>
```

### Cards

#### Basic Card
```jsx
<div className="bg-white p-6 rounded-xl border border-gray-200">
  {/* Content */}
</div>
```

#### Hoverable Card
```jsx
<div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all">
  {/* Content */}
</div>
```

### Progress Bars

#### Thin Progress Bar
```jsx
<div className="w-full bg-gray-100 rounded-full h-1.5">
  <div className="bg-blue-600 h-1.5 rounded-full transition-all" style={{ width: '60%' }} />
</div>
```

#### Medium Progress Bar
```jsx
<div className="w-full bg-gray-100 rounded-full h-2">
  <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: '60%' }} />
</div>
```

### Checkboxes

Use native styled checkboxes with Tailwind:

```jsx
<input
  type="checkbox"
  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2"
/>
```

### Navigation Pills

```jsx
<button className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-50 text-blue-600">
  Active Tab
</button>

<button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50">
  Inactive Tab
</button>
```

## Layout Guidelines

### Container

Maximum width: `1280px` (max-w-7xl)

```jsx
<div className="max-w-7xl mx-auto px-4">
  {/* Content */}
</div>
```

### Grid Systems

#### Two Column
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Items */}
</div>
```

#### Three Column
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Items */}
</div>
```

### Card Padding

- Small cards: `p-4` (16px)
- Medium cards: `p-6` (24px)
- Large cards: `p-8` (32px)

## Interactions

### Hover States

- Buttons: Darken color slightly
- Cards: Add subtle shadow and border color change
- Links: Change color slightly

### Transitions

Default transition:
```css
transition-property: color, background-color, border-color, opacity, transform;
transition-duration: 150ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
```

### Focus States

Use ring utilities for keyboard navigation:
```jsx
focus:ring-2 focus:ring-blue-500
```

## Icons

Use Lucide React icons:

- Size small: 16px
- Size medium: 20px
- Size large: 24px
- Size xlarge: 32px

Match icon color to surrounding text or use accent colors.

## Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Mobile-First Approach

Default styles apply to mobile, then override for larger screens:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## Accessibility

### Contrast Ratios

- Normal text: Minimum 4.5:1
- Large text: Minimum 3:1
- Interactive elements: Clear focus indicators

### Touch Targets

Minimum touch target size: 44x44px

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Visible focus indicators required
- Logical tab order

## Best Practices

### Do's

- Use consistent spacing from the spacing scale
- Stick to the defined color palette
- Maintain clear visual hierarchy
- Test on multiple screen sizes
- Provide clear feedback for interactions
- Use semantic HTML

### Don'ts

- Avoid cluttered layouts
- Don't use too many colors
- Avoid tiny text or buttons
- Don't use heavy animations
- Avoid too many visual effects
- Don't sacrifice accessibility for aesthetics

## Examples

### Stat Card
```jsx
<div className="bg-white p-6 rounded-xl border border-gray-200">
  <div className="flex items-center justify-between mb-3">
    <h3 className="text-sm font-semibold text-gray-600">Label</h3>
    <Icon className="text-blue-600" size={20} />
  </div>
  <div className="text-3xl font-bold text-gray-900 mb-3">
    42<span className="text-lg text-gray-500">/100</span>
  </div>
  <div className="w-full bg-gray-100 rounded-full h-1.5">
    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '42%' }} />
  </div>
  <p className="text-xs text-gray-500 mt-2">42% Complete</p>
</div>
```

### Section Header
```jsx
<div className="mb-8">
  <h1 className="text-3xl font-bold text-gray-900 mb-2">Page Title</h1>
  <p className="text-gray-600">Supporting description text</p>
</div>
```

## Performance Considerations

- Use CSS transitions instead of JavaScript animations
- Lazy load images if needed
- Minimize re-renders with proper React patterns
- Keep bundle size small
- Optimize for Core Web Vitals

## Maintenance

When adding new components:

1. Follow existing patterns
2. Use the defined color palette
3. Maintain consistent spacing
4. Test responsiveness
5. Ensure accessibility
6. Document any new patterns