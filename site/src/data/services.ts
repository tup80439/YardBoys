// Single source of truth for every service Yard Boys offers.
// Used by the Services page (/services), each service's own page (/services/<id>),
// and the service cards on the home page.
//
// To add photos to a service: put the file in site/public/images and add it to that
// service's `gallery` list below. To add a before/after slider, add a pair to `beforeAfter`.

export interface Photo {
  src: string;
  alt: string;
}

export interface BeforeAfterPair {
  before: string;
  after: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  summary: string;
  description: string;
  includes: string[];
  gallery: Photo[];
  beforeAfter?: BeforeAfterPair[];
}

export const services: Service[] = [
  {
    id: 'landscape-design-hardscaping',
    title: 'Landscape Design & Hardscaping',
    subtitle: 'Design Through to Build',
    icon: '🏗️',
    image: '/images/hardscape-patio.jpg',
    summary: 'Patios, walkways, retaining walls, and outdoor living spaces, designed and built to last.',
    description:
      "From concept to completion, we design and build patios, walkways, retaining walls, and outdoor living spaces that transform how you use your property. Whether it's a full patio build, a new stone walkway, or a custom retaining wall, our team handles every phase with precision and quality craftsmanship. This is what we do best.",
    includes: [
      'On-site consultation and layout planning',
      'Paver patios and outdoor living areas',
      'Walkways and stepping paths',
      'Retaining walls and raised beds',
      'Paver and stone bed borders',
      'Bed design, planting, and finishing mulch',
    ],
    gallery: [
      { src: '/images/hardscape-patio.jpg', alt: 'Paver patio with pergola and outdoor seating' },
      { src: '/images/hardscape-fire-pit-river-rock.jpg', alt: 'Backyard fire pit area with river rock and a paver border next to the patio' },
      { src: '/images/landscape-costruction.png', alt: 'Curved beds with paver borders and red mulch along a stone home' },
      { src: '/images/front-walk-after.png', alt: 'Front walkway beds with new plantings and fresh mulch' },
      { src: '/images/front-corner-after-edited.png', alt: 'Front corner bed with a stone border and ornamental tree' },
      { src: '/images/mulch-trees-bricks.jpg', alt: 'Raised mulch bed with a block border and shaped shrubs' },
      { src: '/images/landscaping-project-after.jpg', alt: 'New side yard beds with plantings and mulch' },
      { src: '/images/hardscape-site-prep-track-loader.jpg', alt: 'Yard Boys crew grading a backyard with a compact track loader' },
      { src: '/images/hardscape-grading-along-patio.jpg', alt: 'Ground graded and prepped along a concrete patio, seen from above' },
    ],
    beforeAfter: [
      { before: '/images/landscaping-project-before.jpg', after: '/images/landscaping-project-after.jpg', label: 'Side yard bed install' },
    ],
  },
  {
    id: 'drainage-work',
    title: 'Drainage Work',
    subtitle: 'Water Management Solutions',
    icon: '💧',
    image: '/images/drain-work.jpg',
    summary: 'Fixes for standing water, erosion, and runoff, solved properly, not patched.',
    description:
      "Standing water, erosion, and runoff don't fix themselves, and band-aid solutions only make things worse. We diagnose the root cause and install proper drainage systems that redirect water where it belongs, protecting your foundation, beds, and hardscaping for the long term.",
    includes: [
      'Diagnosing where the water is coming from and where it should go',
      'Trenching and buried drain pipe',
      'Downspout extensions and tie-ins',
      'Regrading low spots around the house',
      'Erosion control in beds and slopes',
      'Restoring lawn and beds after the work',
    ],
    gallery: [{ src: '/images/drain-work.jpg', alt: 'Drainage trench dug along a fence line for buried pipe' }],
  },
  {
    id: 'planting',
    title: 'Planting',
    subtitle: 'Trees, Shrubs & Flower Beds',
    icon: '🌱',
    image: '/images/mulch-bed-flowers.jpg',
    summary: 'Trees, shrubs, and flower beds planned around what will thrive in your yard.',
    description:
      'Tree, shrub, and flower bed installs planned around what will actually thrive in your yard. We consider sunlight, soil conditions, and long-term growth so your plantings look great now and years down the road, not just the week they go in.',
    includes: [
      'Plant selection for your sun and soil',
      'Shrub and flower bed installs',
      'Privacy plantings like arborvitae rows',
      'Small tree planting and replacement',
      'Soil prep and finishing mulch',
    ],
    gallery: [
      { src: '/images/mulch-bed-flowers.jpg', alt: 'Front bed with flowering plants and black mulch' },
      { src: '/images/fence-after.png', alt: 'Row of arborvitae planted along a fence line' },
      { src: '/images/front-walk-after.png', alt: 'Front walkway beds with new shrubs and flowers' },
      { src: '/images/front-corner-after-edited.png', alt: 'Front corner bed with ornamental tree and flowers' },
    ],
    beforeAfter: [{ before: '/images/fence-before.png', after: '/images/fence-after.png', label: 'Fence line planting' }],
  },
  {
    id: 'seasonal-cleanup',
    title: 'Seasonal Clean Up',
    subtitle: 'Spring & Fall Property Care',
    icon: '🍂',
    image: '/images/seasonal-cleanup-rake.png',
    summary: 'Leaves, debris, and overgrowth cleared so the property looks sharp for the season.',
    description:
      'Seasonal clean ups that clear leaves, debris, and overgrowth, leaving the property looking sharp for the season ahead. We handle everything from bed edging and leaf removal to brush clearing and hauling, so your yard is ready when you are.',
    includes: [
      'Leaf removal from lawn and beds',
      'Weeding and bed clean outs',
      'Bed edging',
      'Cutting back perennials and overgrowth',
      'Brush and debris clearing',
      'Hauling everything away',
    ],
    gallery: [
      { src: '/images/seasonal-cleanup-rake.png', alt: 'Fall leaf cleanup in a front yard' },
      { src: '/images/back-yard-clean-out-joe-one-leg-after-1.jpg', alt: 'Narrow back yard strip cleared and cleaned out' },
      { src: '/images/yard-cleanup-after.jpg', alt: 'Side yard after a seasonal cleanup' },
      { src: '/images/leaf-cleanup-after.jpg', alt: 'Front lawn cleared of fall leaves under an orange maple' },
    ],
    beforeAfter: [
      { before: '/images/leaf-cleanup-before.jpg', after: '/images/leaf-cleanup-after.jpg', label: 'Fall leaf cleanup' },
      { before: '/images/yard-cleanup-before.jpg', after: '/images/yard-cleanup-after.jpg', label: 'Side yard cleanup' },
    ],
  },
  {
    id: 'mulch-delivery',
    title: 'Mulch Delivery & Installation',
    subtitle: 'Premium Mulch Solutions',
    icon: '🌿',
    image: '/images/mulch-delivery.jpg',
    summary: 'Fresh mulch delivered and installed for healthier beds and better curb appeal.',
    description:
      "Enhance your garden's health and curb appeal with our premium mulch delivery and installation services. We offer a variety of high-quality mulch options suited to your landscaping needs, including organic and decorative types. Our team ensures even coverage and clean edges to help hold moisture, regulate soil temperature, and keep weeds down.",
    includes: [
      'Mulch delivery',
      'Weeding beds before install',
      'Crisp bed edging',
      'Even installation around plants, trees, and mailboxes',
      'Black, brown, and red mulch options',
      'Cleanup of walks and driveways when we finish',
    ],
    gallery: [
      { src: '/images/mulch-delivery.jpg', alt: 'Front beds with fresh black mulch on a brick home' },
      { src: '/images/black-mulch-front-yard.jpg', alt: 'Island bed with fresh black mulch' },
      { src: '/images/black-mulch-beds.jpg', alt: 'Black mulch beds along the side of a house' },
      { src: '/images/ron-mulch-job.jpg', alt: 'Long front bed with black mulch on a brick colonial' },
      { src: '/images/mulch-house-front.jpg', alt: 'Curved front bed with fresh black mulch' },
      { src: '/images/mulch-house-side.jpg', alt: 'Side yard bed with fresh black mulch' },
      { src: '/images/mulch-mailbox-curb.jpg', alt: 'Mulch around a mailbox and curbside bed' },
      { src: '/images/mulch-red-tree-accent.jpg', alt: 'Mulch ring around a tree by the curb' },
      { src: '/images/island-bed-mulch.jpg', alt: 'Island mulch bed around trees in a front yard' },
      { src: '/images/clean-mulch-bed.jpg', alt: 'Mulch ring around a large tree with a stone edge' },
      { src: '/images/residential-mulch-bed.jpg', alt: 'Front yard beds with fresh mulch' },
      { src: '/images/finished-mulch-job.jpg', alt: 'Completed mulch job around front yard trees' },
      { src: '/images/finished-front-house.jpg', alt: 'Front yard beds finished with fresh mulch' },
      { src: '/images/mulch-bush-cleanup.jpg', alt: 'Trimmed shrubs and fresh mulch in a front bed' },
      { src: '/images/flagpole-bed-after.jpg', alt: 'Flagpole bed with trimmed boxwoods, fresh black mulch, and a reset stone wall' },
    ],
    beforeAfter: [
      { before: '/images/flagpole-bed-before.jpg', after: '/images/flagpole-bed-after.jpg', label: 'Flagpole bed refresh' },
    ],
  },
  {
    id: 'gutter-work',
    title: 'Gutter Work',
    subtitle: 'Cleaning & Repair',
    icon: '🏠',
    image: '/images/gutter-work.jpg',
    summary: 'Gutter cleaning and repair so water goes where it is supposed to.',
    description:
      "Gutter cleaning and repair so water goes where it's supposed to, instead of into your foundation or beds. Clogged or damaged gutters cause problems that compound fast. We clean, repair, and make sure everything's draining properly before we leave.",
    includes: [
      'Clearing leaves and debris from gutters',
      'Flushing and checking downspouts',
      'Minor gutter repairs',
      'Checking that water drains away from the house',
      'Cleanup of debris on the ground',
    ],
    gallery: [{ src: '/images/gutter-work.jpg', alt: 'Gutter filled with leaves before cleaning' }],
  },
  {
    id: 'pruning-trimming',
    title: 'Pruning & Trimming',
    subtitle: 'Expert Plant Care',
    icon: '✂️',
    image: '/images/prunning-trimming.png',
    summary: 'Shaping bushes, hedges, and small trees for a clean look and healthy growth.',
    description:
      'We specialize in professional pruning and trimming to keep your landscape looking its best. From shaping bushes and hedges to pruning small trees for healthy growth, our team delivers precise results with both looks and plant health in mind.',
    includes: [
      'Shrub and hedge shaping',
      'Cutting back overgrown bushes',
      'Ornamental tree pruning',
      'Clearing growth away from the house, walks, and utilities',
      'Hauling away all trimmings',
    ],
    gallery: [
      { src: '/images/prunning-trimming.png', alt: 'Neatly shaped shrubs in front of a stone home' },
      { src: '/images/facade-3-1-edited.png', alt: 'Trimmed front shrubs on a stone home' },
      { src: '/images/facade-5.png', alt: 'Shaped shrubs and ornamental tree in a front yard' },
      { src: '/images/mulch-bush-cleanup.jpg', alt: 'Freshly trimmed bushes with new mulch' },
      { src: '/images/overgrown-landscape-after.jpg', alt: 'Front beds after overgrown shrubs were cut back' },
      { src: '/images/flagpole-bed-after.jpg', alt: 'Boxwoods trimmed into clean rounds in a flagpole bed' },
    ],
    beforeAfter: [
      { before: '/images/overgrown-landscape-before.jpg', after: '/images/overgrown-landscape-after.jpg', label: 'Overgrown front beds' },
    ],
  },
  {
    id: 'tree-care',
    title: 'Tree Care',
    subtitle: 'Pruning, Removal & Stump Grinding',
    icon: '🪓',
    image: '/images/tree-removal.jpg',
    summary: 'Small tree removal, pruning, storm cleanup, and stump grinding.',
    description:
      'Hands-on tree work for residential properties, from shaping young trees to removing storm damage and grinding stumps. We handle the jobs that keep your yard safe, clean, and looking right.',
    includes: [
      'Small tree removal',
      'Sapling and invasive tree removal',
      'Ornamental tree pruning',
      'Low limb removal',
      'Small deadwood removal that can be reached safely from the ground',
      'Tree shaping and structural pruning on young trees',
      'Clearance pruning around fences, sheds, driveways, and patios',
      'Storm cleanup after limbs have already fallen',
      'Cutting small stumps low to the ground',
      'Stump grinding',
      'Tree planting and replacement',
      'Large shrub and small tree reductions',
    ],
    gallery: [{ src: '/images/tree-removal.jpg', alt: 'Yard Boys crew member cutting a fallen tree off a roof' }],
  },
  {
    id: 'snow-removal',
    title: 'Snow Removal',
    subtitle: 'Winter Weather Solutions',
    icon: '❄️',
    image: '/images/snow-removal.jpg',
    summary: 'Driveways, walkways, and lots cleared quickly and safely all winter.',
    description:
      'When winter weather strikes, count on our team to clear driveways, walkways, and parking lots efficiently and safely. We use professional-grade equipment to clear snow without damaging your property. Whether you need one-time help or service all season, we keep your spaces safe and accessible.',
    includes: [
      'Driveway clearing',
      'Walkway and front step shoveling',
      'Salting walks and steps',
      'One-time storms or seasonal service',
      'Residential and small commercial lots',
    ],
    gallery: [{ src: '/images/snow-removal.jpg', alt: 'Red snow shovel in fresh snow' }],
  },
  {
    id: 'christmas-lights',
    title: 'Christmas Lights',
    subtitle: 'Holiday Light Installation',
    icon: '🎄',
    image: '/images/christmas-lights-roofline-trees.jpg',
    summary: 'A completely hands off holiday lighting service. We design, install, maintain, take down, and store your lights.',
    description:
      "Our Christmas lighting service is completely hands off for you. We design a display that fits your home, install everything, keep it shining all season, then take it all down after the holidays and store your lights until next year. No ladders, no tangled strands, and no boxes in your garage. Residential and commercial properties.",
    includes: [
      'Custom design planned with you before install',
      'Professional installation on rooflines, gutters, trees, and shrubs',
      'Service visits during the season if anything stops working',
      'Takedown after the holidays',
      'Storage of your lights until next season',
      'Garland, wreaths, and storefront displays available',
    ],
    gallery: [
      { src: '/images/christmas-lights-roofline-trees.jpg', alt: 'Warm white Christmas lights on the roofline, trees, and shrubs of a stucco home at dusk' },
      { src: '/images/christmas-lights-red-green-dormers.jpg', alt: 'Red and green C9 lights outlining dormers, roofline, and front door, seen from above' },
      { src: '/images/christmas-lights-multicolor-brick-home.jpg', alt: 'Multicolor roofline lights with wrapped shrubs and trees on a brick colonial' },
      { src: '/images/christmas-lights-red-white-cape-cod.jpg', alt: 'Red and warm white C9 lights on the roofline and dormers of a Cape Cod' },
      { src: '/images/christmas-lights-aerial-warm-white.jpg', alt: 'Warm white lights on the roofline, dormer, and front porch, seen from above' },
      { src: '/images/christmas-lights-red-white-stone-home.jpg', alt: 'Red and warm white roofline lights on a two story stone and siding home' },
      { src: '/images/christmas-lights-warm-white-farmhouse.jpg', alt: 'Warm white lights on the gables and porch of a two story home' },
      { src: '/images/christmas-lights-carport-ranch.jpg', alt: 'White lights along a carport gable and ranch home roofline' },
      { src: '/images/christmas-lights-finished.jpg', alt: 'Multicolor Christmas lights on a roofline and front yard trees' },
      { src: '/images/christmas-lights-display.jpg', alt: 'Warm white Christmas lights outlining a home and front porch' },
      { src: '/images/christmas-lights-crew-install.jpg', alt: 'Yard Boys crew clipping red and green C9 lights onto a dormer' },
    ],
  },
  {
    id: 'land-clearing',
    title: 'Land Clearing & Overgrowth Removal',
    subtitle: 'Brush Clearing & Property Reclamation',
    icon: '🌳',
    image: '/images/land-clearing-after.jpg',
    summary: 'Overgrown yards and lots cleared out so the property is usable again.',
    description:
      "Clearing brush and reclaiming yards that have gotten overgrown, so the property's usable again. We handle everything from small backyard cleanouts to larger lots that have been let go, cutting, hauling, and grading until it's back to a workable state.",
    includes: [
      'Cutting down brush, vines, and weeds',
      'Removing small saplings and invasive growth',
      'Clearing fence lines and side yards',
      'Patio and walkway reclamation',
      'Hauling all debris away',
      'Leveling and prepping the ground for what comes next',
    ],
    gallery: [
      { src: '/images/land-clearing-after.jpg', alt: 'Side yard path cleared of overgrowth' },
      { src: '/images/patio-overgrowth-after.jpg', alt: 'Paver patio cleared of overgrowth' },
      { src: '/images/overgrowth-cleanup-after.jpg', alt: 'Fence line cleared of dense overgrowth' },
      { src: '/images/back-yard-clean-out-joe-one-leg-after-1.jpg', alt: 'Back yard strip cleared out along a fence' },
      { src: '/images/overgrown-house-after.jpg', alt: 'Side of a red house after overgrown trees and brush were cleared away' },
    ],
    beforeAfter: [
      { before: '/images/overgrown-house-before.jpg', after: '/images/overgrown-house-after.jpg', label: 'Overgrowth cleared off the house' },
      { before: '/images/patio-overgrowth-before.jpg', after: '/images/patio-overgrowth-after.jpg', label: 'Patio overgrowth' },
      { before: '/images/land-clearing-before.jpg', after: '/images/land-clearing-after.jpg', label: 'Side yard clearing' },
      { before: '/images/overgrowth-cleanup-before.jpg', after: '/images/overgrowth-cleanup-after.jpg', label: 'Fence line overgrowth' },
    ],
  },
];

export const getService = (id: string) => services.find((s) => s.id === id);
