/**
 * level object format:
 * name - it is 'id' of Euclidea game xml data,
 * id - level id
 * stars - [L, E, V]
 * title - level title
 * image - level image prefix, the images put in images/level/
 * description - level description
 * quote - quote after level passed
 * quote_author - quote author
 * fact - level hint info, geometry fact image for both L&E, the images put in images/hints
 * seq - both L&E solve sequence
 * lseq - L solve sequence
 * eseq - E solve sequence
 * draft - level hint info, draft image for both L&E, the images put in images/hints
 * edraft - level hint info, draft image for E, the images put in images/hints
 */
(function () {
    "use strict";
    var pack = {
        "1.Alpha": [
            {
                name: "Angle60",
                id: "1.1",
                stars: [3, 3, 2],
                title: "Angle of 60°",
                image: "angle60",
                description: "Construct an angle of 60° with the given side.",
                quote: "Let no one ignorant of geometry enter here.",
                quote_author: "Plato",
                fact: ["Fact-Equilateral"],
                seq: "圆，圆，线",
                draft: "Draft-Angle60"
            }, {
                name: "PerpBisector",
                id: "1.2",
                stars: [3, 3, 1],
                title: "Perpendicular Bisector",
                image: "perp-bisector",
                description: "Construct the perpendicular bisector of the segment.",
                quote: "Education is what remains after one has forgotten everything he learned in school.",
                quote_author: "Albert Einstein",
                fact: ["Fact-RhombusDiagonals"],
                seq: "圆，圆，线"
            }, {
                name: "Midpoint",
                id: "1.3",
                stars: [2, 4, 1],
                title: "Midpoint",
                image: "midpoint",
                description: "Construct the midpoint between two points.",
                quote: "Without geometry, life would be pointless.",
                quote_author: "Joke",
                seq: "线，垂分，点"
            }, {
                name: "CircleInSquare",
                id: "1.4",
                stars: [3, 5, 1],
                title: "Circle in Square",
                image: "circle-in-square",
                description: "Inscribe a circle in the square.",
                quote: "You can't fit a round peg in a square hole.",
                quote_author: "American proverb",
                fact: ["Fact-SquareSymmetry", "Fact-Tangent"],
                seq: "线，垂分，圆"
            }, {
                name: "RhombusInRect",
                id: "1.5",
                stars: [3, 5, 2],
                title: "Rhombus in Rectangle",
                image: "rhombus-in-rect",
                description: "Inscribe a rhombus in the rectangle so that they share a diagonal.",
                quote: "Without mathematics there is no art.",
                quote_author: "Luca Pacioli",
                fact: ["Fact-RhombusDiagonals"],
                seq: "垂分，线，线",
                draft: "Draft-RhombusInRect"
            }, {
                name: "CircleCenter",
                id: "1.6",
                stars: [2, 5, 1],
                title: "Circle Center",
                image: "circle-center",
                description: "Construct the center of the circle.",
                quote: "Nature is an infinite sphere of which the center is everywhere and the circumference nowhere.",
                quote_author: "Blaise Pascal",
                fact: ["Fact-CircumCircle"],
                lseq: "垂分，垂分，点",
                eseq: "圆，圆，圆，线，线，点"
            }, {
                name: "SquareInCircle",
                id: "1.7",
                stars: [6, 7, 1],
                title: "Inscribed Square",
                image: "square-in-circle",
                description: "Inscribe a square in the circle. A vertex is given.",
                quote: "Where there is matter, there is geometry.",
                quote_author: "Johannes Kepler",
                fact: ["Fact-SquareDiagonals"],
                lseq: "线，垂分，线，线，线，线",
                eseq: "圆，圆，线，线，线，线，线",
                edraft: "Draft-SquareInCircle"
            }
        ],
        "2.Beta": [
            {
                name: "BisectAngle",
                id: "2.1",
                stars: [2, 4, 1],
                title: "Angle Bisector",
                image: "bisect-angle",
                description: "Construct the line that bisects the given angle.",
                quote: "The description of right lines and circles, upon which geometry is founded, belongs to mechanics. Geometry does not teach us to draw these lines, but requires them to be drawn.",
                quote_author: "Isaac Newton",
                fact: ["Fact-Isosceles"],
                seq: "圆，垂分"
            }, {
                name: "RhombusInTriangle",
                id: "2.2",
                stars: [4, 9, 1],
                title: "Rhombus in Triangle",
                image: "rhombus-in-triangle",
                description: "Inscribe a rhombus in the triangle so that they share the common angle A.",
                quote: "The moving power of mathematical invention is not reasoning but imagination.",
                quote_author: "Augustus de Morgan",
                fact: ["Fact-RhombusDiagonals"],
                seq: "角分，垂分，线，线"
            }, {
                name: "Angle30",
                id: "2.3",
                stars: [3, 3, 2],
                title: "Angle of 30°",
                image: "angle30",
                description: "Construct an angle of 30° with the given side.",
                quote: "Inspiration is needed in geometry, just as much as in poetry.",
                quote_author: "Alexander Pushkin",
                fact: ["Fact-CentralAngle"],
                seq: "圆，圆，线"
            }, {
                name: "DoubleAngle",
                id: "2.4",
                stars: [3, 3, 2],
                title: "Double Angle",
                image: "double-angle",
                description: "Construct an angle equal to the given one so that they share one side.",
                quote: "Contradiction is not a sign of falsity, nor the lack of contradiction a sign of truth.",
                quote_author: "Blaise Pascal",
                seq: "圆，圆，线",
                draft: "Draft-DoubleAngle"
            }, {
                name: "CutRectangle",
                id: "2.5",
                stars: [3, 3, 1],
                title: "Cut Rectangle",
                image: "cut-rectangle",
                description: "Construct a line through the given point that cuts the rectangle into two parts of equal area.",
                quote: "Measure twice, cut once!",
                quote_author: "Proverb",
                fact: ["Fact-RectCenter"],
                seq: "线，线，线"
            }, {
                name: "DropPerp",
                id: "2.6",
                stars: [2, 3, 1],
                title: "Drop a Perpendicular",
                image: "drop-perp",
                description: "Drop a perpendicular from the point to the line.",
                quote: "The knowledge of which geometry aims is the knowledge of the eternal.",
                quote_author: "Plato",
                lseq: "圆，垂分",
                fact: ["Fact-MirrorSymmetry"],
                eseq: "圆，圆，线"
            }, {
                name: "ErectPerp",
                id: "2.7",
                stars: [1, 3, 1],
                title: "Erect a Perpendicular",
                image: "erect-perp",
                description: "Erect a perpendicular from the point on the line.",
                quote: "What we know is not much. What we do not know is immense.",
                quote_author: "Pierre-Simon Laplace",
                lseq: "角分",
                fact: ["Fact-Thales90"],
                eseq: "圆，线，线"
            }, {
                name: "Tangent1",
                id: "2.8",
                stars: [2, 3, 1],
                title: "Tangent to Circle at Point",
                image: "tangent1",
                description: "Construct a tangent to the circle at the given point.",
                quote: "If a man's wit be wandering, let him study the mathematics.",
                quote_author: "Francis Bacon",
                lseq: "线，垂线",
                eseq: "圆，圆，线"
            }, {
                name: "CircleTangentL",
                id: "2.9",
                stars: [2, 4, 1],
                title: "Circle Tangent to Line",
                image: "circle-tangent-l",
                description: "Construct a circle with the given center that is tangent to the given line.",
                quote: "Intellectual labor in math lessons is the touchstone of thinking.",
                quote_author: "Vasili Sukhomlinsky",
                seq: "垂线，圆"
            }, {
                name: "CircleInRhombus",
                id: "2.10",
                stars: [4, 6, 1],
                title: "Сircle in Rhombus",
                image: "circle-in-rhombus",
                description: "Inscribe a circle in the rhombus.",
                quote: "The mathematician's patterns, like the painter's or the poet's must be beautiful; the ideas like the colours or the words, must fit together in a harmonious way.",
                quote_author: "Godfrey Hardy",
                fact: ["Fact-RhombusDiagonals", "Fact-Tangent"],
                seq: "线，线，垂线，圆"
            }
        ],
        "3.Gamma": [
            {
                name: "ChordMidpoint",
                id: "3.1",
                stars: [2, 4, 1],
                title: "Chord Midpoint",
                image: "chord-midpoint",
                description: "Construct a chord whose midpoint is given.",
                quote: "The study of the mathematics, like the Nile, begins in minuteness, but ends in magnificence.",
                quote_author: "Charles Colton",
                seq: "线，垂线"
            }, {
                name: "ATrByOrthocenter",
                id: "3.2",
                stars: [3, 6, 1],
                title: "Triangle by Angle and Orthocenter",
                image: "a-tr-by-orthocenter",
                description: "Construct a segment connecting the sides of the angle to get a triangle whose orthocenter is in the point O.",
                quote: "A mathematician is a machine for turning coffee into theorems.",
                quote_author: "Alfred Rényi",
                lseq: "垂线，垂线，线",
                eseq: "圆，圆，圆，线，线，线"
            }, {
                name: "ATrByCircumcenter",
                id: "3.3",
                stars: [2, 2, 1],
                title: "Intersection of Perpendicular Bisectors",
                image: "a-tr-by-circumcenter",
                description: "Construct a segment connecting the sides of the angle to get a triangle whose perpendicular bisectors are intersected in the point O.",
                quote: "Knowledge exists to be imparted.",
                quote_author: "Ralph Emerson.",
                fact: ["Fact-CircumCircle"],
                seq: "圆，线"
            }, {
                name: "AEqualSegments1",
                id: "3.4",
                stars: [4, 6, 2],
                title: "Three equal segments - 1",
                image: "a-equal-segments1",
                description: "Given an angle ABC and a point M inside it, find points D on BA and E on BC and construct segments DM and ME such that BD = DM = ME.",
                quote: "All knowledge degenerates into probability.",
                quote_author: "David Hume",
                fact: ["Fact-PBisect"],
                seq: "垂分，圆，线，线"
            }, {
                name: "CircleTangentPL",
                id: "3.5",
                stars: [3, 6, 1],
                title: "Circle through Point Tangent to Line",
                image: "circle-tangent-p-l",
                description: "Construct a circle through the point A that is tangent to the given line at the point B.",
                quote: "Knowledge comes, but wisdom lingers.",
                quote_author: "Alfred Tennyson",
                fact: ["Fact-Tangent", "Fact-PBisect"],
                lseq: "垂分，垂线，圆",
                eseq: "圆，圆，线，线，线，圆"
            }, {
                name: "TrapezoidCut",
                id: "3.6",
                stars: [3, 5, 1],
                title: "Midpoints of Trapezoid Bases",
                image: "trapezoid-cut",
                description: "Construct a line passing through the midpoints of the trapezoid bases.",
                quote: "If there is a God, he is a great mathematician.",
                quote_author: "Paul Dirac",
                lseq: "垂分，垂分，线",
                eseq: "线，线，线，线，线"
            }, {
                name: "Angle45",
                id: "3.7",
                stars: [2, 5, 2],
                title: "Angle of 45°",
                image: "angle45",
                description: "Construct an angle of 45° with the given side.",
                quote: "He is unworthy of the name of man who is ignorant of the fact that the diagonal of a square is incommensurable with its side.",
                quote_author: "Plato",
                lseq: "垂线，角分",
                eseq: "垂线，圆，线"
            }, {
                name: "Lozenge",
                id: "3.8",
                stars: [5, 7, 4],
                title: "Lozenge",
                image: "lozenge",
                description: "Construct a rhombus with the given side and an angle of 45° in a vertex.",
                quote: "To think deeply of simple things.",
                quote_author: "Arnold Ross",
                lseq: "垂线，角分，圆，垂线，线",
                eseq: "圆，圆，线，圆，线，线，线"
            }
        ],
        "4.Delta": [
            {
                name: "CDoubleSeg",
                id: "4.1",
                stars: [3, 3, 2],
                title: "Double Segment",
                image: "c-double-seg",
                description: "Construct a point C on the line AB such that |AC|=2|AB| using only a compass.",
                quote: "A mathematical truth is neither simple nor complicated in itself, it is.",
                quote_author: "Emile Lemoine",
                seq: "圆，圆，圆，点"
            }, {
                name: "Angle60Drop",
                id: "4.2",
                stars: [3, 4, 2],
                title: "Angle of 60° - 2",
                image: "angle60-drop",
                description: "Construct a straight line through the given point that makes an angle of 60° with the given line.",
                quote: "The best angle from which to approach any problem is the try-angle.",
                quote_author: "Author Unknown",
                eseq: "圆，圆，圆，线",
                lseq: "圆，圆，垂分"
            }, {
                name: "EquilateralAboutCircle",
                id: "4.3",
                stars: [5, 6, 1],
                title: "Circumscribed Equilateral Triangle",
                image: "equilateral-about-circle",
                description: "Construct an equilateral triangle that is circumscribed about the circle and contains the given point.",
                quote: "Logic is the anatomy of thought.",
                quote_author: "John Locke",
                lseq: "线，垂线，圆，线，线",
                eseq: "线，圆，圆，线，线，线"
            }, {
                name: "EquilateralInCircle",
                id: "4.4",
                stars: [5, 6, 1],
                title: "Equilateral Triangle in Circle",
                image: "equilateral-in-circle",
                description: "Inscribe an equilateral triangle in the circle using the given point as a vertex. The center of the circle is not given.",
                quote: "We do not choose mathematics as our profession; it chooses us.",
                quote_author: "Yuri Manin",
                eseq: "圆，圆，线，线，线，线，线",
                lseq: "圆，圆，垂分，垂分，线"
            }, {
                name: "Cut2Rectangles",
                id: "4.5",
                stars: [5, 5, 1],
                title: "Cut Two Rectangles",
                image: "cut2-rectangles",
                description: "Construct a line that cuts each of the rectangles into two parts of equal area.",
                quote: "Mathematics is the most reliable form of prophecy.",
                quote_author: "Wilhelm Schwebel",
                fact: ["Fact-RectCenter"],
                seq: "线，线，线，线，线"
            }, {
                name: "Sqrt2",
                id: "4.6",
                stars: [3, 5, 1],
                title: "Square Root of 2",
                image: "sqrt2",
                description: "Let |AB|=1. Construct a point C on the ray AB such that the length of AC is equal to the square root of 2.",
                quote: "The square root of 2 is also known as Pythagoras' constant.",
                quote_author: "Wikipedia",
                fact: ["Fact-Pythagoras"],
                seq: "垂线，圆，圆，点",
                draft: "Draft-Sqrt2"
            }, {
                name: "Sqrt3",
                id: "4.7",
                stars: [3, 3, 1],
                title: "Square Root of 3",
                image: "sqrt3",
                description: "Let |AB|=1. Construct a point C on the ray AB such that the length of AC is equal to the square root of 3.",
                quote: "The square root of 3 is also known as Theodorus' constant.",
                quote_author: "Wikipedia",
                fact: ["Fact-Pythagoras"],
                seq: "圆，圆，圆，点",
                draft: "Draft-Sqrt3"
            }, {
                name: "Angle15",
                id: "4.8",
                stars: [3, 5, 2],
                title: "Angle of 15°",
                image: "angle15",
                description: "Construct an angle of 15° with the given side.",
                quote: "If we know anything we know it by mathematics.",
                quote_author: "Pierre Gassendi",
                lseq: "圆，圆，角分",
                fact: ["Fact-CentralAngle"],
                eseq: "圆，圆，圆，线，线"
            }, {
                name: "SquareByOppMidpoints",
                id: "4.9",
                stars: [6, 10, 1],
                title: "Square by Opposite Midpoints",
                image: "square-by-opp-midpoints",
                description: "Construct a square, given two midpoints of opposite sides.",
                quote: "For the first condition to be fulfilled in Mathematics is to be exact; the second is to be as clear and simple as possible.",
                quote_author: "Lazare Carnot",
                lseq: "线，垂线，圆，垂分，垂分，垂线",
                eseq: "圆，圆，线，线，圆，线，线，线，圆，线"
            }, {
                name: "SquareByAdjMidpoints",
                id: "4.10",
                stars: [7, 10, 2],
                title: "Square by Adjacent Midpoints",
                image: "square-by-adj-midpoints",
                description: "Construct a square, given two midpoints of adjacent sides.",
                quote: "Thinking is the hardest work there is, which is probably the reason so few engage in it.",
                quote_author: "Henry Ford",
                lseq: "线，垂线，角分，垂线，圆，垂分，垂线",
                eseq: "线，垂分，圆，线，线，圆，线，线"
            }
        ],
        "5.Epsilon": [
            {
                name: "Parallel",
                id: "5.1",
                stars: [2, 4, 1],
                title: "Parallel Line",
                image: "parallel",
                description: "Construct a line parallel to the given line through the given point.",
                quote: "It is ignorance alone that could lead anyone to try to prove the axiom.",
                quote_author: "Aristotle",
                lseq: "垂线，垂线",
                fact: ["Fact-RhombusSides", "Fact-RectCenter"],
                eseq: "圆，线，圆，线"
            }, {
                name: "Parallelogram3V",
                id: "5.2",
                stars: [4, 8, 3],
                title: "Parallelogram by Three Vertices",
                image: "parallelogram3-v",
                description: "Construct a parallelogram whose three of four vertices are given.",
                quote: "Logic is invincible, because in order to combat logic it is necessary to use logic.",
                quote_author: "Pierre Boutroux",
                lseq: "线，线，平行，平行",
                eseq: "线，线，圆，圆，圆，圆，线，线"
            }, {
                name: "LineAlongPoints",
                id: "5.3",
                stars: [2, 4, 1],
                title: "Line Equidistant from Two Points - 1",
                image: "line-along-points",
                description: "Construct a line through the point C and at equal distance from the points A and B but that does not pass between them.",
                quote: "Mathematics is a tool for reasoning.",
                quote_author: "Richard Feynman",
                lseq: "线，平行",
                eseq: "圆，线，圆，线"
            }, {
                name: "LineBetweenPoints",
                id: "5.4",
                stars: [3, 5, 1],
                title: "Line Equidistant from Two Points - 2",
                image: "line-between-points",
                description: "Construct a line through the point C that goes between the points A and B and that is at equal distance from them.",
                quote: "Mathematics is the science of those things that are clear in and of themselves.",
                quote_author: "Carl Jacobi",
                seq: "垂分，线，线"
            }, {
                name: "TrapezoidMedian",
                id: "5.5",
                stars: [2, 6, 1],
                title: "Arithmetic Mean of Trapezoid Bases",
                image: "trapezoid-median",
                description: "Construct a line segment that is parallel to the bases of the trapezoid and whose length is equal to the arithmetic mean of their length.",
                quote: "Mathematics is the language with which God wrote the universe.",
                quote_author: "Galileo Galilei",
                seq: "垂线，垂分"
            }, {
                name: "Hash",
                id: "5.6",
                stars: [2, 4, 2],
                title: "Hash",
                image: "hash",
                description: "Construct a line through the given point on which two pairs of parallel lines cut off equal line segments.",
                quote: "No other science than mathematics strengthens so much our faith in the power of the human mind.",
                quote_author: "Hugo Steinhaus",
                lseq: "线，平行",
                eseq: "圆，线，圆，线",
                draft: "Draft-Hash"
            }, {
                name: "ShiftAngle",
                id: "5.7",
                stars: [2, 6, 1],
                title: "Shift Angle",
                image: "shift-angle",
                description: "Construct an angle from the given point that is equal to the given angle so that their sides are parallel.",
                quote: "Geometry is the real life.",
                quote_author: "Oscar Zariski",
                lseq: "平行，平行",
                eseq: "线，圆，圆，圆，线，线"
            }, {
                name: "SquareAboutCircle",
                id: "5.8",
                stars: [6, 11, 1],
                title: "Circumscribed Square",
                image: "square-about-circle",
                description: "Circumscribe a square about the circle. Two its sides should be parallel to the given line.",
                quote: "A round man cannot be expected to fit in a square hole right away. He must have time to modify his shape.",
                quote_author: "Mark Twain",
                lseq: "垂线，垂线，垂线，圆，垂线，垂线",
                eseq: "垂线，圆，线，圆，圆，线，线，线，线"
            }, {
                name: "SquareInSquare",
                id: "5.9",
                stars: [6, 7, 1],
                title: "Square in Square",
                image: "square-in-square",
                description: "Inscribe a square in the square. A vertex is given.",
                quote: "If you wish to learn swimming you have to go into the water and if you wish to become a problem solver you have to solve problems.",
                quote_author: "George Pólya",
                fact: ["Fact-PointSymmetry"],
                eseq: "线，线，圆，线，线，线，线",
                lseq: "圆，平行，线，垂线，垂线，垂线"
            }, {
                name: "HexagonBySide",
                id: "5.10",
                stars: [7, 8, 2],
                title: "Regular Hexagon",
                image: "hexagon-by-side",
                description: "Construct a regular hexagon with the given side.",
                quote: "If only I had the theorems! Then I should find the proofs easily enough.",
                quote_author: "Bernard Riemann",
                fact: ["Fact-Hexagon"],
                eseq: "圆，圆，圆，线，线，线，线，线",
                lseq: "圆，圆，线，线，平行，平行，垂分"
            }
        ],
        "6.Zeta": [
            {
                name: "PtSymmetry",
                id: "6.1",
                stars: [4, 5, 1],
                title: "Point Reflection",
                image: "pt-symmetry",
                description: "Reflect the segment across the point.",
                quote: "Symmetry is one of the ideas by which man through the ages has tried to comprehend and create order, beauty, and perfection.",
                quote_author: "Hermann Weyl",
                fact: ["Fact-PointSymmetry"],
                eseq: "圆，圆，线，线，线",
                lseq: "线，圆，平行，线，点"
            }, {
                name: "MirrorSeg",
                id: "6.2",
                stars: [5, 5, 1],
                title: "Reflection",
                image: "mirror-seg",
                description: "Reflect the segment across the line.",
                quote: "Symmetry is what we see at a glance; based on the fact that there is no reason for any difference...",
                quote_author: "Blaise Pascal",
                fact: ["Fact-MirrorSymmetry"],
                seq: "圆，圆，圆，圆，线"
            }, {
                name: "ShiftSegment",
                id: "6.3",
                stars: [3, 4, 2],
                title: "Copy Segment",
                image: "shift-segment",
                description: "Construct a segment from the given point that is equal to the given segment and lies on the same line with it.",
                quote: "Let no man who is not a Mathematician read the elements of my work.",
                quote_author: "Leonardo da Vinci",
                fact: ["Fact-MirrorSymmetry"],
                lseq: "线，垂分，圆，点",
                eseq: "线，圆，圆，圆，点"
            }, {
                name: "GivenAngleBisector",
                id: "6.4",
                stars: [4, 4, 1],
                title: "Given Angle Bisector",
                image: "given-angle-bisector",
                description: "Construct two straight lines through the two given points respectively so that the given line is a bisector of the angle that they make.",
                quote: "I would live to study, and not study to live.",
                quote_author: "Francis Bacon",
                fact: ["Fact-MirrorSymmetry"],
                seq: "圆，圆，线，线"
            }, {
                name: "CircleByRadius",
                id: "6.5",
                stars: [4, 5, 1],
                title: "Non-collapsing Compass",
                image: "circle-by-radius",
                description: "Construct a circle with the given center and the radius equal to the length of the given segment.",
                quote: "There is nothing strange in the circle being the origin of any and every marvel.",
                quote_author: "Aristotle",
                fact: ["Fact-MirrorSymmetry"],
                eseq: "圆，圆，圆，圆，圆",
                lseq: "线，平行，平行，圆"
            }, {
                name: "TranslateSegment",
                id: "6.6",
                stars: [2, 6, 2],
                title: "Translate Segment",
                image: "translate-segment",
                description: "Construct a segment from the given point parallel and equal to the given segment.",
                quote: "Mathematics is a game played according to certain rules with meaningless marks on paper.",
                quote_author: "David Hilbert",
                lseq: "定圆，平行，点",
                eseq: "圆，圆，圆，圆，线，圆，点",
                edraft: "Draft-TranslateSegment"
            }, {
                name: "TriangleBySides",
                id: "6.7",
                stars: [4, 12, 4],
                title: "Triangle by Three Sides",
                image: "triangle-by-sides",
                description: "Construct a triangle with the side AB and the two other sides equal to the given segments.",
                quote: "One geometry cannot be more true than another; it can only be more convenient.",
                quote_author: "Henri Poincaré",
                seq: "定圆，定圆，线，线"
            }, {
                name: "HypotenuseAndLeg",
                id: "6.8",
                stars: [5, 9, 4],
                title: "Hypotenuse and Leg",
                image: "hypotenuse-and-leg",
                description: "Construct a right triangle with the given hypotenuse AB and whose leg is equal to the given segment.",
                quote: "The best way to make mathematics interesting to students and laymen is to approach it in a spirit of play.",
                quote_author: "Martin Gardner",
                lseq: "定圆，垂分，圆，线，线",
                eseq: "定圆，圆，圆，圆，线，线"
            }, {
                name: "ParallelogramBySP",
                id: "6.9",
                stars: [5, 8, 1],
                title: "Parallelogram",
                image: "parallelogram-by-s-p",
                description: "Construct a parallelogram with the given side and the midpoint of the opposite side in the given point.",
                quote: "The subject of mathematics is so serious that nobody should miss an opportunity to make it a little bit entertaining.",
                quote_author: "Blaise Pascal",
                lseq: "垂分，定圆，平行，线，线",
                eseq: "线，圆，圆，线，圆，线，圆，线"
            }
        ],
        "7.Eta": [
            {
                name: "SumSquares",
                id: "7.1",
                stars: [3, 6, 1],
                title: "Sum of Areas of Squares",
                image: "sum-squares",
                description: "Construct a square whose area equals the sum of the areas of the two given squares and all three have the common angle.",
                quote: "The whole is greater than the sum of its parts.",
                quote_author: "Aristotle",
                lseq: "定圆，垂线，垂线",
                eseq: "线，圆，圆，线，线，线"
            }, {
                name: "Annulus",
                id: "7.2",
                stars: [4, 5, 1],
                title: "Annulus",
                image: "annulus",
                description: "Construct a circle that is concentric with the given one and divides it into 2 parts of equal area.",
                quote: "We must know, we will know!",
                quote_author: "David Hilbert",
                fact: ["Fact-CircleArea"],
                lseq: "线，垂分，圆，圆",
                eseq: "线，圆，线，圆，圆"
            }, {
                name: "Angle75",
                id: "7.3",
                stars: [4, 5, 2],
                title: "Angle of 75°",
                image: "angle75",
                description: "Construct an angle of 75° with the given side.",
                quote: "The human mind has first to construct forms, independently, before we can find them in things.",
                quote_author: "Albert Einstein",
                lseq: "垂线，圆，圆，角分",
                eseq: "圆，圆，圆，线，线"
            }, {
                name: "Equidistant3",
                id: "7.4",
                stars: [3, 7, 3],
                title: "Line Equidistant from Three Points",
                image: "equidistant3",
                description: "Construct a line that is at equal distance from the given three points.",
                quote: "Mathematics is gymnastics of thinking.",
                quote_author: "Alexander Suvorov",
                seq: "线，垂线，垂分"
            }, {
                name: "Heron",
                id: "7.5",
                stars: [4, 4, 1],
                title: "Heron's Problem",
                image: "heron",
                description: "Construct a point C and segments AC and BC such that the sum of their length is minimal.",
                quote: "Life is good for only two things, discovering mathematics and teaching mathematics.",
                quote_author: "Simeon Poisson",
                fact: ["Fact-MirrorSymmetry"],
                seq: "圆，圆，线，线",
                draft: "Draft-Heron"
            }, {
                name: "Circle3",
                id: "7.6",
                stars: [3, 7, 1],
                title: "Circumscribed Circle",
                image: "circle3",
                description: "Construct the circumcircle of the triangle.",
                quote: "I should almost therefore put forward the proposal that the third hypothesis (angle sum of a triangle less than two right angles) holds on the surface of an imaginary sphere.",
                quote_author: "Johann Lambert",
                fact: ["Fact-CircumCircle"],
                seq: "垂分，垂分，圆"
            }, {
                name: "CircleInTriangle",
                id: "7.7",
                stars: [4, 8, 1],
                title: "Inscribed Circle",
                image: "circle-in-triangle",
                description: "Construct the incircle of the triangle.",
                quote: "Circles to square and cubes to double would give a man exercise trouble.",
                quote_author: "Matthew Prior",
                fact: ["Fact-Incircle"],
                lseq: "角分，角分，垂线，圆",
                eseq: "圆，圆，圆，圆，圆，线，线，圆",
                edraft: "Draft-CircleInTriangle"
            }, {
                name: "AngleMidpoint",
                id: "7.8",
                stars: [3, 5, 1],
                title: "Segment by Midpoint",
                image: "angle-midpoint",
                description: "Construct a segment with the ends on the sides of the angle such that the given point is its midpoint.",
                quote: "Do not worry about your difficulties in Mathematics: I can assure you mine are far greater.",
                quote_author: "Albert Einstein",
                lseq: "平行，圆，线",
                eseq: "圆，线，线，线，线"
            }, {
                name: "AngleIsosceles",
                id: "7.9",
                stars: [2, 5, 1],
                title: "Angle Isosceles",
                image: "angle-isosceles",
                description: "Construct a line through the given point such that it cuts off equal segments on the sides of the angle.",
                quote: "There are two ways to do great mathematics. The first is to be smarter than everybody else. The second way is to be stupider than everybody else — but persistent.",
                quote_author: "Raoul Bott",
                eseq: "圆，圆，圆，圆，线",
                lseq: "角分，垂线"
            }, {
                name: "AngleTrisection54",
                id: "7.10",
                stars: [4, 5, 1],
                title: "Angle 54° Trisection",
                image: "angle-trisection54",
                description: "Construct two rays that divide the given angle of 54° into three equal parts.",
                quote: "If I feel unhappy, I do mathematics to become happy. If I am happy, I do mathematics to keep happy.",
                quote_author: "Alfred Rényi",
                eseq: "圆，圆，圆，线，线",
                lseq: "圆，圆，线，角分"
            }, {
                name: "Excircle",
                id: "7.11",
                stars: [4, 8, 3],
                title: "Excircle",
                image: "excircle",
                description: "Construct an excircle of the triangle formed by the three given lines.",
                quote: "It is easy to go from the house of reality to the forest of mathematics, but only few know how to go back.",
                quote_author: "Hugo Steinhaus",
                lseq: "角分，角分，垂线，圆",
                eseq: "圆，圆，圆，圆，圆，线，线，圆"
            }, {
                name: "PerimeterBisector",
                id: "7.12",
                stars: [4, 7, 3],
                title: "Perimeter Bisector",
                image: "perimeter-bisector",
                description: "Construct a straight line through a vertex of the triangle that divides its perimeter in half.",
                quote: "He became a poet, he lacked imagination for a mathematician.",
                quote_author: "David Hilbert",
                lseq: "定圆，定圆，垂分，线",
                eseq: "线，圆，圆，垂分，线"
            }
        ],
        "8.Theta": [
            {
                name: "AMinPerimeter",
                id: "8.1",
                stars: [6, 6, 1],
                title: "Minimum Perimeter - 1",
                image: "a-min-perimeter",
                description: "Construct a triangle whose perimeter is the minimum possible whose vertices lie on the two sides of the angle and the third vertex is in the point A.",
                quote: "Geometry is frozen music.",
                quote_author: "Johann Goethe",
                seq: "圆，圆，圆，线，线，线"
            }, {
                name: "3rdProportional",
                id: "8.2",
                stars: [3, 3, 1],
                title: "Third Proportional",
                image: "3rd-proportional",
                description: "Construct a point D on the ray such that the segment AD is the third proportional to the given line segments.",
                quote: "Everything around us is geometry.",
                quote_author: "Le Corbusier",
                seq: "圆，圆，圆，点"
            }, {
                name: "TrapezoidHarmMean",
                id: "8.3",
                stars: [3, 5, 1],
                title: "Harmonic Mean of Trapezoid Bases",
                image: "trapezoid-harm-mean",
                description: "Construct a line segment that is parallel to the bases of the trapezoid and whose length is equal to the harmonic mean of their length.",
                quote: "Mathematics is less knowledge than skill.",
                quote_author: "Philip Davis",
                eseq: "线，线，圆，圆，线",
                lseq: "线，线，平行"
            }, {
                name: "LDropPerp",
                id: "8.4",
                stars: [5, 5, 1],
                title: "Drop a Perpendicular*",
                image: "l-drop-perp",
                description: "Drop a perpendicular from the point to the line passing through the center of the circle using only a straightedge.",
                quote: "It is not enough to have a good mind. The main thing is to use it well.",
                quote_author: "Rene Descartes",
                seq: "线，线，线，线，线"
            }, {
                name: "LMidpoint",
                id: "8.5",
                stars: [5, 5, 1],
                title: "Midpoint*",
                image: "l-midpoint",
                description: "Construct the midpoint of the segment using only a straightedge. To help you, a line parallel to the segment is given.",
                quote: "Everything should be made as simple as possible, but not simpler.",
                quote_author: "Albert Einstein",
                seq: "线，线，线，线，线，点"
            }, {
                name: "InteriorAngles",
                id: "8.6",
                stars: [2, 4, 2],
                title: "Interior Angles",
                image: "interior-angles",
                description: "Construct a line through the point that crosses the two lines so that the interior angles are equal.",
                quote: "I am ever more convinced that the necessity of our (Euclidean) geometry cannot be proved — at least not by human reason for human reason.",
                quote_author: "Carl Friedrich Gauss",
                lseq: "角分，垂线",
                eseq: "圆，圆，圆，线"
            }, {
                name: "OctagonBySide",
                id: "8.7",
                stars: [9, 13, 2],
                title: "Regular Octagon",
                image: "octagon-by-side",
                description: "Construct a regular octagon with the given side.",
                quote: "The essence of mathematics is its freedom.",
                quote_author: "Georg Cantor",
                lseq: "垂线，角分，垂线，角分，垂线，垂线，垂线，垂分，垂线",
                eseq: "圆，圆，线，圆，线，线，圆，圆，线，线，线，线，线"
            }, {
                name: "TrapezoidCut3",
                id: "8.8",
                stars: [3, 6, 2],
                title: "Trisection by Trapezoid Diagonals",
                image: "trapezoid-cut3",
                description: "Construct a line segment that is parallel to the bases of the trapezoid and is divided to three equal parts by its diagonals.",
                quote: "It is hard to convince a high-school student that he will encounter a lot of problems more difficult than those of algebra and geometry.",
                quote_author: "Edgar Watson Howe",
                lseq: "垂分，线，垂线",
                eseq: "垂分，线，线，线"
            }, {
                name: "OrthicTriangle",
                id: "8.9",
                stars: [6, 8, 1],
                title: "Minimum Perimeter - 2",
                image: "orthic-triangle",
                description: "Inscribe a triangle into the given whose perimeter is the minimum possible.",
                quote: "The roots of education are bitter, but the fruit is sweet.",
                quote_author: "Aristotle",
                lseq: "垂线，垂线，线，线，线，线",
                eseq: "圆，圆，线，圆，线，圆，线，线"
            }, {
                name: "HarmonicMean",
                id: "8.10",
                stars: [4, 4, 1],
                title: "Harmonic Mean of Segments",
                image: "harmonic-mean",
                description: "Construct a point on the given ray to get a segment with length equal to the harmonic mean of the two adjacent segments.",
                quote: "Geometry is knowledge of the eternally existent.",
                quote_author: "Pythagoras",
                seq: "圆，圆，线，线，点"
            }, {
                name: "ATrByCentroid",
                id: "8.11",
                stars: [5, 7, 1],
                title: "Triangle by Angle and Centroid",
                image: "a-tr-by-centroid",
                description: "Construct a segment connecting the sides of the angle to get a triangle whose centroid is in the point O.",
                quote: "I think, therefore I am.",
                quote_author: "Rene Descartes",
                eseq: "线，圆，圆，线，圆，线，线",
                lseq: "平行，平行，圆，圆，线"
            }
        ],
        "9.Iota": [
            {
                name: "Tangent",
                id: "9.1",
                stars: [4, 5, 2],
                title: "Tangent of Circle",
                image: "tangent",
                description: "Construct a tangent to the circle from the external point.",
                quote: "Nothing is more important than to see the sources of invention which are, in my opinion more interesting than the inventions themselves.",
                quote_author: "Gottfried Leibniz",
                fact: "Method-Homothety",
                eseq: "线，圆，圆，圆，线",
                lseq: "线，垂分，圆，线"
            }, {
                name: "OuterTangent",
                id: "9.2",
                stars: [6, 8, 2],
                title: "Outer Tangent",
                image: "outer-tangent",
                description: "Construct an outer tangent between two circles.",
                quote: "It is the glory of geometry that from so few principles, fetched from without, it is able to accomplish so much.",
                quote_author: "Isaac Newton",
                fact: "Method-Homothety",
                eseq: "线，圆，圆，线，圆，圆，线，线",
                lseq: "线，垂分，垂分，圆，圆，线"
            }, {
                name: "InnerTangent",
                id: "9.3",
                stars: [6, 8, 2],
                title: "Inner Tangent",
                image: "inner-tangent",
                description: "Construct an inner tangent between two circles.",
                quote: "Imagination is more important than knowledge.",
                quote_author: "Albert Einstein",
                fact: "Method-Homothety",
                eseq: "线，圆，圆，线，圆，圆，线，线",
                lseq: "线，垂分，垂分，圆，圆，线"
            }, {
                name: "90RotationCCW",
                id: "9.4",
                stars: [5, 9, 1],
                title: "Rotation 90°",
                image: "90-rotation-c-c-w",
                description: "Rotate the line segment 90° counterclockwise about the given point.",
                quote: "Imagination decides everything.",
                quote_author: "Blaise Pascal",
                seq: "线，垂线，圆，圆，垂线，点"
            }, {
                name: "60RotationCW",
                id: "9.5",
                stars: [4, 4, 1],
                title: "Rotation 60°",
                image: "60-rotation-c-w",
                description: "Rotate the line segment 60° clockwise about the given point.",
                quote: "Science is simply common sense at its best.",
                quote_author: "Thomas Huxley",
                seq: "圆，圆，圆，线"
            }, {
                name: "Divide3",
                id: "9.6",
                stars: [5, 6, 1],
                title: "Segment Trisection",
                image: "divide3",
                description: "Construct two points that divide the segment into 3 equal parts.",
                quote: "Three Rules of Work: Out of clutter find simplicity; From discord find harmony; In the middle of difficulty lies opportunity.",
                quote_author: "Albert Einstein",
                seq: "圆，圆，圆，线，线，圆，点"
            }, {
                name: "LDivide3",
                id: "9.7",
                stars: [8, 8, 1],
                title: "Segment Trisection*",
                image: "l-divide3",
                description: "Construct points that divide the segment into three equal parts using only a straightedge. To help you, a line parallel to the segment is given.",
                quote: "Beauty is the first test: there is no permanent place in the world for ugly mathematics.",
                quote_author: "Godfrey Hardy",
                seq: "线，线，线，线，线，线，线，线，点，点"
            }, {
                name: "Chord3",
                id: "9.8",
                stars: [3, 4, 2],
                title: "Chord Trisection",
                image: "chord3",
                description: "Construct a chord of the larger circle through the given point that is divided into three equal segments by the smaller circle.",
                quote: "Mathematics is the door and key to the sciences.",
                quote_author: "Roger Bacon",
                lseq: "线，定圆，线",
                eseq: "线，圆，圆，线"
            }, {
                name: "Segment6",
                id: "9.9",
                stars: [4, 5, 2],
                title: "Ratio 1 to 5",
                image: "segment6",
                description: "Construct a point on the line segment that divides it in the ratio 1 : 5.",
                quote: "In mathematics the art of proposing a question must be held of higher value than solving it.",
                quote_author: "Georg Cantor",
                seq: "线，圆，圆，圆，线，点"
            }, {
                name: "3CirclesC",
                id: "9.10",
                stars: [7, 10, 1],
                title: "Three Circles - 1",
                image: "3-circles-c",
                description: "Construct three circles with the given centers that are externally tangent each other.",
                quote: "Knowledge is power.",
                quote_author: "Francis Bacon",
                eseq: "线，线，圆，圆，垂分，圆，圆，圆",
                lseq: "圆，圆，线，垂分，圆，圆，定圆"
            }, {
                name: "Secant2",
                id: "9.11",
                stars: [4, 5, 2],
                title: "Secant Bisection",
                image: "secant2",
                description: "Construct a secant through the given point that is divided into two equal segments by the circle.",
                quote: "Knowledge is light and ignorance is darkness.",
                quote_author: "Proverb",
                eseq: "圆，线，圆，圆，线",
                lseq: "圆，线，定圆，线"
            }, {
                name: "3CirclesI",
                id: "9.12",
                stars: [9, 14, 1],
                title: "Three Circles - 2",
                image: "3-circles-i",
                description: "Construct three circles tangent to each other at the given points.",
                quote: "Education is the best provision for the journey to old age.",
                quote_author: "Aristotle",
                eseq: "垂分，圆，圆，线，线，线，线，线，线，圆，圆，圆",
                lseq: "垂分，垂分，线，垂线，圆，圆，线，线，圆"
            }
        ],
        "10.Kappa": [
            {
                name: "4thProportional",
                id: "10.1",
                stars: [2, 3, 1],
                title: "Fourth Proportional",
                image: "4th-proportional",
                description: "Construct a point D on the ray OC such that the segment OD is the fourth proportional to the given segments.",
                quote: "Mathematics is concerned only with the enumeration and comparison of relations.",
                quote_author: "Friedrich Gauss",
                lseq: "线，平行，点",
                eseq: "圆，圆，线，点"
            }, {
                name: "GeometricMean",
                id: "10.2",
                stars: [3, 5, 1],
                title: "Geometric Mean of Segments",
                image: "geometric-mean",
                description: "Construct a point on the given ray to get a segment with length equal to the geometric mean of two adjacent segments.",
                quote: "Mathematics is the part of physics where experiments are cheap.",
                quote_author: "Vladimir Arnold",
                draft: "Draft-2Isosceles",
                eseq: "圆，圆，圆，线，圆，点",
                lseq: "垂线，垂分，圆，点"
            }, {
                name: "GoldenSection",
                id: "10.3",
                stars: [4, 5, 2],
                title: "Golden Section",
                image: "golden-section",
                description: "Construct a point that divides the segment in the \"golden section\".",
                quote: "The Golden ratio has inspired thinkers of all disciplines like no other number in the history of mathematics.",
                quote_author: "Mario Livio",
                eseq: "线，圆，圆，圆，线，点",
                lseq: "垂分，定圆，线，定圆，点"
            }, {
                name: "Angle54",
                id: "10.4",
                stars: [5, 6, 2],
                title: "Angle of 54°",
                image: "angle54",
                description: "Construct an angle of 54° with the given side.",
                quote: "The scientist is not a person who gives the right answers, he's one who asks the right questions.",
                quote_author: "Claude Levi-Strauss",
                seq: "圆，圆，圆，线，圆，线"
            }, {
                name: "L3Parallel",
                id: "10.5",
                stars: [7, 7, 1],
                title: "Third Parallel Line",
                image: "l3-parallel",
                description: "Construct a line through the given point that is parallel to the two given parallel lines using only a straightedge.",
                quote: "It is impossible to be a mathematician without being a poet in soul.",
                quote_author: "Sofia Kovalevskaya",
                seq: "线，线，线，线，线，线，线，线"
            }, {
                name: "CircleInAngle",
                id: "10.6",
                stars: [6, 11, 2],
                title: "Circle in Angle",
                image: "circle-in-angle",
                description: "Construct a circle through the given point that is tangent to both sides of the angle.",
                quote: "The mathematical sciences particularly exhibit order symmetry and limitations; and these are the greatest forms of the beautiful.",
                quote_author: "Aristotle",
                Method: "Method-Homothety",
                lseq: "线，角分，垂线，圆，线，平行，圆",
                eseq: "角分，圆，圆，线，圆，圆，线，圆"
            }, {
                name: "TrapezoidGeomMean",
                id: "10.7",
                stars: [6, 9, 1],
                title: "Geometric Mean of Trapezoid Bases",
                image: "trapezoid-geom-mean",
                description: "Construct a line segment that is parallel to the bases of the trapezoid and whose length is equal to the geometric mean of their length.",
                quote: "Mathematics is a language plus reasoning; it is like a language plus logic.",
                quote_author: "Richard Feynman",
                lseq: "定圆，圆，垂分，圆，平行，平行",
                eseq: "线，线，圆，垂分，圆，圆，圆，线"
            }, {
                name: "Pentagon",
                id: "10.8",
                stars: [9, 10, 1],
                title: "Regular Pentagon",
                image: "pentagon",
                description: "Construct a regular pentagon inscribed in the circle. A vertex is given.",
                quote: "Mighty is geometry; joined with art, resistless.",
                quote_author: "Euripides",
                seq: "线，圆，圆，线，圆，线，线，线，线，线"
            }, {
                name: "Angle3",
                id: "10.9",
                stars: [6, 7, 2],
                title: "Angle of 3°",
                image: "angle3",
                description: "Construct an angle of 3° with the given side.",
                quote: "Like all other sciences, mathematics arose out of the needs of men: from the measurement of land and the content of vessels, from the computation of time and from mechanics.",
                quote_author: "Friedrich Engels",
                eseq: "圆，圆，圆，线，圆，线，圆，线",
                lseq: "圆，圆，圆，线，圆，角分"
            }
        ],
        "11.Lambda": [
            {
                name: "TriangleByMidpoints",
                id: "11.1",
                stars: [5, 8, 1],
                title: "Triangle by Midpoints",
                image: "triangle-by-midpoints",
                description: "Construct a triangle given the midpoints of its sides.",
                quote: "\"Obvious\" is the most dangerous word in mathematics.",
                quote_author: "Eric Bell",
                eseq: "圆，圆，圆，圆，线，圆，线，线",
                lseq: "线，定圆，平行，线，线"
            }, {
                name: "TrBySideAndCentroid",
                id: "11.2",
                stars: [6, 7, 1],
                title: "Triangle by Side and Centroid",
                image: "tr-by-side-and-centroid",
                description: "Construct a triangle with the given side and centroid.",
                quote: "You are the only person on earth who can use your ability. It's an awesome responsibility.",
                quote_author: "Zig Ziglar",
                eseq: "线，圆，圆，线，线，圆，线",
                lseq: "垂分，线，圆，圆，线，线"
            }, {
                name: "TrByAltitudeBases",
                id: "11.3",
                stars: [5, 11, 1],
                title: "Triangle by Altitude Base Points",
                image: "tr-by-altitude-bases",
                description: "Construct a triangle whose altitude base points are given.",
                quote: "One quickly realizes that simplicity and geometry are the language of timelessness and universality.",
                quote_author: "Paul Rand",
                lseq: "角分，角分，垂线，线，线",
                eseq: "垂分，垂分，圆，圆，线，线，线"
            }, {
                name: "TrByIncircleBases",
                id: "11.4",
                stars: [6, 11, 1],
                title: "Triangle by Tangent Points",
                image: "tr-by-incircle-bases",
                description: "Construct a triangle with the three given points where its incircle touches its sides.",
                quote: "Music is the arithmetic of sounds as optics is the geometry of light.",
                quote_author: "Claude Debussy",
                lseq: "垂分，垂分，线，垂线，线，线",
                eseq: "垂分，圆，圆，线，线，线，线，线，线"
            }, {
                name: "TrByExcircleCenters",
                id: "11.5",
                stars: [9, 11, 1],
                title: "Triangle by Excenters",
                image: "tr-by-excircle-centers",
                description: "Construct a triangle with the given excenters.",
                quote: "There are no sects in geometry.",
                quote_author: "Voltaire",
                seq: "线，线，线，垂线，圆，线，圆，线，线"
            }, {
                name: "RTrBy2SidePoints",
                id: "11.6",
                stars: [6, 8, 2],
                title: "Right Triangle by Two Points on Legs",
                image: "r-tr-by2-side-points",
                description: "Inscribe a right triangle into the circle so that the two given points lie on its two legs respectively. The center of the circle is in the point O.",
                quote: "Beauty is geometry.",
                quote_author: "Joanne Rowling",
                seq: "线，垂分，圆，线，线，线"
            }
        ],
        "12.Mu": [
            {
                name: "CircleTangentCL",
                id: "12.1",
                stars: [4, 9, 2],
                title: "Circle Tangent to Line and Circle",
                image: "circle-tangent-c-l",
                description: "Construct a circle tangent to the line at the given point and to the given circle.",
                quote: "The object of mathematical rigor is to sanction and legitimize the conquests of intuition.",
                quote_author: "Jacques Hadamard",
                lseq: "垂线，定圆，垂分，圆",
                eseq: "垂线，线，线，垂线，圆"
            }, {
                name: "Equilateral3",
                id: "12.2",
                stars: [7, 8, 2],
                title: "Equilateral Triangle - 2",
                image: "equilateral3",
                description: "Construct an equilateral triangle whose one vertex is given and two others lie on the two parallel lines.",
                quote: "The only thing I am interested in using mathematics for is to have a good time and to help others do the same.",
                quote_author: "Paul Lockhart",
                lseq: "垂线，圆，圆，线，垂线，线，线",
                eseq: "圆，圆，圆，线，线，圆，线，线"
            }, {
                name: "SquareInTriangle",
                id: "12.3",
                stars: [6, 12, 1],
                title: "Square in Triangle",
                image: "square-in-triangle",
                description: "Inscribe a square in the acute triangle ABC so that one of its sides lies on AC.",
                quote: "The line of life is a ragged diagonal between duty and desire.",
                quote_author: "William Alger",
                lseq: "垂线，圆，线，垂线，垂线，垂线",
                eseq: "垂线，圆，线，垂线，圆，圆，线，线"
            }, {
                name: "Equidistant2",
                id: "12.4",
                stars: [5, 8, 2],
                title: "Point Equidistant from Side of Angle and Point",
                image: "equidistant2",
                description: "Given an angle ABC and a point M inside it, find points D on BA and E on BC and construct segments MD and DE of equal length so that DE is perpendicular to BC.",
                quote: "You can't criticize geometry. It's never wrong.",
                quote_author: "Paul Rand",
                Method: "Method-Homothety",
                lseq: "线，垂线，圆，线，平行，垂线",
                eseq: "圆，圆，线，圆，圆，线，圆，线"
            }, {
                name: "CircleTangentCC",
                id: "12.5",
                stars: [4, 8, 2],
                title: "Circle Tangent to Two Circles",
                image: "circle-tangent-c-c",
                description: "Construct a circle that is tangent to the two given circles and touches one of them in the given point.",
                quote: "There is still a difference between something and nothing, but it is purely geometrical and there is nothing behind the geometry.",
                quote_author: "Martin Gardner",
                lseq: "线，定圆，垂分，圆",
                eseq: "线，平行，线，线，圆"
            }, {
                name: "CircleTangentPPL",
                id: "12.6",
                stars: [6, 10, 2],
                title: "Circle Through Two Points and Tangent to Line",
                image: "circle-tangent-p-p-l",
                description: "Construct a circle that goes through the two given points and that is tangent to the given line.",
                quote: "The very smallest errors in mathematical matters are not to be neglected.",
                quote_author: "Isaac Newton",
                lseq: "垂分，垂线，圆，线，线，平行，圆",
                eseq: "垂分，圆，圆，线，圆，圆，线，圆"
            }, {
                name: "RTrByHypAndTangentPt",
                id: "12.7",
                stars: [6, 9, 2],
                title: "Triangle by Tangent Point on Hypotenuse",
                image: "r-tr-by-hyp-and-tangent-pt",
                description: "Construct a right triangle with the given hypotenuse and the tangent point of its incircle.",
                quote: "Since we cannot know all that there is to be known about anything, we ought to know a little about everything.",
                quote_author: "Blaise Pascal",
                eseq: "垂分，圆，圆，线，圆，线，线",
                lseq: "垂分，圆，垂分，圆，线，线"
            }
        ],
        "13.Nu": [
            {
                name: "CMidpoint",
                id: "13.1",
                stars: [6, 6, 1],
                title: "Midpoint*",
                image: "c-midpoint",
                description: "Construct the midpoint between the given points using only a compass.",
                quote: "Don't spoil my circles!",
                quote_author: "Archimedes",
                seq: "圆，圆，圆，圆，圆，圆，点，点"
            }, {
                name: "CTranslateCircle",
                id: "13.2",
                stars: [4, 4, 1],
                title: "Copy Circle",
                image: "c-translate-circle",
                description: "Construct a circle with the given center that is equal to the given circle.",
                quote: "Nothing new had been done in Logic since Aristotle!",
                quote_author: "Kurt Godel",
                seq: "圆，圆，圆，圆"
            }, {
                name: "CIntersectCL",
                id: "13.3",
                stars: [4, 4, 1],
                title: "Line-Circle Intersection",
                image: "c-intersect-c-l",
                description: "Construct the intersection of the circle and the line defined by the two given points using only a compass.",
                quote: "A mathematician, like a painter or a poet, is a maker of patterns. If his patterns are more permanent than theirs, it is because they are made with ideas.",
                quote_author: "Godfrey Hardy",
                seq: "圆，圆，圆，圆，点，点"
            }, {
                name: "EqualSegments3",
                id: "13.4",
                stars: [7, 7, 1],
                title: "Three Equal Segments",
                image: "equal-segments3",
                description: "Construct a segment whose ends lie on the sides of the angle such that three marked segments are equal.",
                quote: "We do not know a truth without knowing its cause.",
                quote_author: "Aristotle",
                Method: "Method-Homothety",
                seq: "线，圆，圆，圆，线，圆，线"
            }, {
                name: "LTangent",
                id: "13.5",
                stars: [8, 8, 2],
                title: "Tangent to Circle*",
                image: "l-tangent",
                description: "Construct a tangent to the circle from the external point using only a straightedge. The center of the circle is not given.",
                quote: "Projective geometry is all geometry.",
                quote_author: "Arthur Cayley",
                seq: "线，线，线，线，线，线，线，线"
            }, {
                name: "Napoleon",
                id: "13.6",
                stars: [6, 6, 1],
                title: "Napoleon's Problem",
                image: "napoleon",
                description: "Construct the center of the given circle using only a compass.",
                quote: "The advancement and perfection of mathematics are intimately connected with the prosperity of the state.",
                quote_author: "Napoléon Bonaparte",
                seq: "圆，圆，圆，圆，圆，圆，点"
            }, {
                name: "LDropPerp2",
                id: "13.7",
                stars: [10, 10, 1],
                title: "Drop a Perpendicular**",
                image: "l-drop-perp2",
                description: "Drop a perpendicular from the center of the circle to the given line using only a straightedge.",
                quote: "The only way to get at the truth about our imaginations is to use our imaginations, and that is hard work.",
                quote_author: "Paul Lockhart",
                seq: "线，线，线，线，线，线，线，线，线，线"
            }, {
                name: "CIntersectX",
                id: "13.8",
                stars: [9, 9, 1],
                title: "Line-Circle Intersection*",
                image: "c-intersect-x",
                description: "Construct the intersection of the circle and the line that goes through its center and the given point using only a compass.",
                quote: "Do not ask whether a statement is true until you know what it means.",
                quote_author: "Errett Bishop",
                seq: "圆，圆，圆，圆，圆，圆，圆，圆，圆，圆，点，点"
            }, {
                name: "CircleTangentCPwCenterL",
                id: "13.9",
                stars: [8, 9, 2],
                title: "Circle with Center on Line",
                image: "circle-tangent-c-pw-center-l",
                description: "Construct a circle with the center on the given line so that it passes through the given point and tangent to the given circle.",
                quote: "A mind is a fire to be kindled, not a vessel to be filled.",
                quote_author: "Plutarch",
                lseq: "圆，线，垂线，线，垂分，圆，线，圆",
                eseq: "圆，线，圆，线，圆，线，圆，圆，线，圆"
            }
        ]
    };
    module.exports = pack;
}());