# CSS Documentation - MASA Dashboard

## Overview

The MASA Dashboard uses a modern, professional design with:
- Bootstrap 5.3 framework
- Custom CSS variables for theming
- Glassmorphism effects
- Dark theme with cyan accents
- Responsive design for all screen sizes

## CSS Architecture

### File Structure
- **Bootstrap 5.3** - Base framework (imported via CDN)
- **styles.css** - Custom styling and overrides
- **CSS Variables** - Centralized color and spacing system

### Design System

#### Color Palette

```css
/* Primary Colors */
--primary: #2fd8ff;      /* Bright Cyan - Main accent */
--secondary: #7dd7ff;    /* Light Cyan - Secondary accent */
--accent: #40d2ff;       /* Cyan - UI accents */
--accent-soft: rgba(64, 210, 255, 0.16); /* Soft cyan background */

/* Status Colors */
--success: #3ee3b0;      /* Green - Success state */
--warning: #f5b24e;      /* Orange - Warning state */
--danger: #ff6b6b;       /* Red - Error/danger state */

/* Surface Colors */
--surface: rgba(7, 14, 28, 0.92);      /* Dark blue - Main background */
--surface-alt: rgba(10, 18, 36, 0.82); /* Dark blue alt - Secondary */

/* Text Colors */
--text: #edf6ff;         /* Light blue - Main text */
--muted: rgba(225, 235, 245, 0.72); /* Muted text */

/* UI Colors */
--border: rgba(255, 255, 255, 0.12); /* Light borders */
--shadow: 0 32px 90px rgba(0, 0, 0, 0.28); /* Deep shadow */
```

#### Typography

```css
Font Family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Font Weights: 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
Line Height: 1.65 (general), varies by component
```

#### Spacing System

Bootstrap uses 4px base unit:
- `.m-1` / `.p-1` = 4px
- `.m-2` / `.p-2` = 8px
- `.m-3` / `.p-3` = 16px
- `.m-4` / `.p-4` = 24px
- `.m-5` / `.p-5` = 48px

#### Border Radius

```css
.rounded-1  = 0.25rem (4px)
.rounded-2  = 0.375rem (6px)
.rounded-3  = 0.5rem (8px)
.rounded-4  = 0.75rem (12px)
.rounded-5  = 1rem (16px)
```

---

## Component Styling

### Navigation Bar

```css
.navbar {
  background: rgba(16, 23, 56, 0.88) !important;
  backdrop-filter: blur(16px);  /* Glassmorphism effect */
}
```

**Features:**
- Fixed position (top)
- Semi-transparent with backdrop blur
- Responsive mobile menu
- Sticky on scroll

### Hero Section

```css
.hero-section {
  background: linear-gradient(135deg, rgba(8, 18, 36, 0.92) 0%, ...);
  position: relative;
  min-height: calc(100vh - 88px);
  padding-top: 6.5rem;
  padding-bottom: 4rem;
}
```

**Features:**
- Full viewport height
- Gradient background
- Radial gradient overlay for depth
- Centered content

### Metric Cards

```css
.metric-card {
  background: rgba(7, 15, 30, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 38px 110px rgba(0, 0, 0, 0.32);
}
```

**Features:**
- Glassmorphism design
- Semi-transparent background
- Subtle border
- Deep shadow for depth

### Dashboard Layout

```css
.dashboard-layout {
  display: grid;
  grid-template-columns: 280px 1fr;
  min-height: 100vh;
}
```

**Features:**
- Sidebar + Main layout
- Responsive (sidebar hides on mobile)
- Full viewport height
- 280px sidebar width

### Sidebar

```css
.sidebar {
  position: sticky;
  top: 88px;  /* Below fixed nav */
  height: calc(100vh - 88px);
}
```

**Features:**
- Sticky positioning
- Scrollable content
- Organized sections
- Status indicators

---

## Effects & Animations

### Glassmorphism

Achieved with:
```css
background: rgba(16, 23, 56, 0.88);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.08);
```

### Gradient Overlays

```css
/* Radial gradient for depth */
background: radial-gradient(circle at 10% 10%, rgba(94, 76, 255, 0.16), transparent 18%);

/* Linear gradient for transitions */
background: linear-gradient(135deg, rgba(8, 18, 36, 0.92) 0%, rgba(10, 22, 40, 0.9) 45%);
```

### Transitions

```css
.sidebar-link {
  transition: all 0.2s ease;
}

.sidebar-link:hover {
  transform: translateY(-1px);
  background: rgba(64, 210, 255, 0.10);
}
```

---

## Responsive Breakpoints

### Mobile First Approach

```css
/* Extra small (default, < 576px) */
.dashboard-layout {
  grid-template-columns: 1fr;  /* Single column */
}
.sidebar {
  display: none;  /* Hide sidebar */
}

/* Large screens and up (≥ 992px) */
@media (min-width: 992px) {
  .dashboard-layout {
    grid-template-columns: 280px 1fr;  /* Sidebar + main */
  }
  .sidebar {
    display: block;
  }
}
```

### Grid System

Bootstrap 12-column grid:
```html
<div class="row">
  <div class="col-12 col-lg-6">  <!-- Full width mobile, 50% on large */
  <div class="col-12 col-xl-3">  <!-- Full width mobile, 25% on xl */
</div>
```

---

## CSS Classes Reference

### Text Classes

```css
.text-white      /* White text */
.text-dark       /* Dark text */
.text-muted      /* Muted gray text */
.text-secondary  /* Secondary color text */
.text-white-75   /* White with 75% opacity */

.fw-bold         /* Font weight: bold (700) */
.fw-semibold     /* Font weight: semibold (600) */

.display-5       /* Extra large heading */
.h1 - .h6        /* Heading sizes */
.lead            /* Large paragraph text */
.eyebrow         /* Small label text */
```

### Layout Classes

```css
.container       /* Centered, fixed width */
.container-fluid /* Full width */
.container-xl    /* Extra large container */

.d-flex          /* Display: flex */
.flex-column     /* Column direction */
.flex-wrap       /* Flex wrap */
.gap-3           /* Gap: 1rem */

.align-items-center  /* Vertical center */
.justify-content-between /* Space between */
```

### Spacing Classes

```css
.m-1 to .m-5     /* Margin (all sides) */
.mt-3            /* Margin top */
.mb-4            /* Margin bottom */
.p-2 to .p-5     /* Padding */
.pt-7            /* Padding top (custom) */
.pb-6            /* Padding bottom (custom) */
.gx-3            /* Grid horizontal gap */
.gy-4            /* Grid vertical gap */
```

### Shadow Classes

```css
.shadow-lg       /* Large shadow */
.shadow-sm       /* Small shadow */
.shadow-none     /* No shadow */
```

### Border & Radius

```css
.border           /* 1px solid border */
.border-0         /* No border */
.rounded-4        /* Border radius 0.75rem */
.rounded-5        /* Border radius 1rem */
```

### Display Classes

```css
.d-none          /* display: none */
.d-block         /* display: block */
.d-flex          /* display: flex */
.d-grid          /* display: grid */

@media (max-width: 991px) {
  .d-lg-none     /* Hide on large+ */
}
```

---

## Custom CSS Utilities

### Utility Classes Defined in styles.css

```css
.bg-glass          /* Glassmorphic background */
.eyebrow           /* Small label styling */
.metric-card       /* Card with glass effect */
.metric-label      /* Label text */
.metric-value      /* Large metric number */
.metric-icon       /* Icon styling */
.status-pill       /* Status badge */
.sidebar-pill      /* Sidebar badge */
.badge-pill        /* Pill-shaped badge */
```

---

## Box Model

### Default

```css
* {
  box-sizing: border-box;  /* Includes padding/border in width */
}
```

### Spacing Standards

- Padding inside components: 0.5rem to 2rem
- Margin between sections: 2rem to 4rem
- Gap between grid items: 0.75rem to 2rem

---

## Z-Index Hierarchy

```css
/* Approximate z-index levels */
backdrop-filter   /* 0 - Background effects */
body::before      /* -1 - Gradient overlay */
main              /* 1 - Main content */
.navbar           /* 1030 - Fixed top nav */
.hero-section     /* 1 - Hero with relative positioning */
```

---

## Dark Theme Implementation

### Color Inversion Strategy

```css
/* Light backgrounds for dark theme */
background: rgba(7, 14, 28, 0.92);  /* Very dark blue */

/* Light text for dark backgrounds */
color: #edf6ff;  /* Very light blue-white */

/* Bright accents pop against dark */
--primary: #2fd8ff;  /* Bright cyan */
--success: #3ee3b0;  /* Bright green */
--danger: #ff6b6b;   /* Bright red */
```

### Contrast Ratios

- Text on background: 7:1+ (AAA compliant)
- Accent on background: 5:1+ (AA compliant)
- Border on background: 2:1+ (visible)

---

## Performance Optimizations

### CSS Optimization

```css
/* Use efficient selectors */
.sidebar-link {}  /* Class selector - fast */
.sidebar > .link {} /* Avoid excessive nesting */

/* Avoid expensive properties on hover */
.link:hover {
  transform: translateY(-1px);  /* GPU accelerated */
  /* Avoid: box-shadow (expensive recalculation) */
}

/* Use CSS variables for DRY styling */
color: var(--primary);  /* Change in one place */
```

### Print Styles

```css
@media print {
  .navbar, .sidebar { display: none; }
  body { background: white; color: black; }
}
```

---

## Customization Guide

### Changing Color Scheme

1. Edit CSS variables in `styles.css`:
   ```css
   :root {
     --primary: #your-color;
     --accent: #your-color;
   }
   ```

2. All components automatically update

### Changing Layout Width

1. Modify `.container-xl` max-width
2. Update sidebar width in `.dashboard-layout`
3. Adjust padding/margins as needed

### Changing Typography

1. Update font imports in `index.html`
2. Modify font-family in `body` CSS
3. Adjust font-sizes in heading classes

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Features Used

- CSS Grid
- CSS Variables (custom properties)
- Backdrop filter
- Calc() function
- Media queries
- Flexbox

---

## Common CSS Patterns

### Centering Content

```css
/* Flexbox center */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Grid center */
.container {
  display: grid;
  place-items: center;
}

/* Absolute center */
.container {
  position: relative;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### Responsive Images

```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### Truncate Text

```css
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

---

## Development Tips

### Debugging Styles

1. Open DevTools (F12)
2. Go to Elements tab
3. Inspect element
4. See computed styles
5. Toggle classes on/off
6. Test live CSS changes

### Common Issues

**Issue**: Elements not centered
- Solution: Check display property (flex/grid)
- Check align-items/justify-content

**Issue**: Text colors not visible
- Solution: Check contrast ratio
- Ensure text color is light for dark backgrounds

**Issue**: Layout breaking on mobile
- Solution: Check responsive classes
- Verify media queries

---

## Additional Resources

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Grid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Flexbox Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

---

## Summary

The MASA Dashboard CSS provides:
✅ Modern design system with CSS variables
✅ Professional dark theme
✅ Responsive grid layout
✅ Glassmorphism effects
✅ Accessible color contrasts
✅ Performance optimizations
✅ Easy customization

Happy styling! 🎨
