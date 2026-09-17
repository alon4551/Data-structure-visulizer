/**
 * מאגר תבניות ואלגוריתמי בגרות מובנים — C# & Java
 * אלון שרייבמן — מורה פרטי
 * שכבת י"ב (יחידה 4): תור, מחסנית, חוליה ועץ בינארי
 */

const PRESETS_QUEUE_CS = {
    'basic': {
        id: 'basic',
        title: '🔹 בסיסי: Queue<int> (מציאת מקסימום)',
        studioMode: 'queue',
        initialQueueType: 'int',
        initialQueue: [14, 7, 25, 9, 31],
        initialParams: { q: [14, 7, 25, 9, 31] },
        files: {
            'Program.cs': `// מציאת ערך מקסימלי בתור של מספרים
public class Program
{
    public static int FindMax(Queue<int> q)
    {
        Queue<int> temp = new Queue<int>();
        int maxVal = q.Head();

        while (!q.IsEmpty())
        {
            int x = q.Remove();
            Console.WriteLine("בודק איבר: " + x);
            if (x > maxVal)
            {
                maxVal = x;
            }
            temp.Insert(x);
        }

        // שחזור התור המקורי (שמירה על כלל הברזל בבגרות)
        while (!temp.IsEmpty())
        {
            q.Insert(temp.Remove());
        }

        Console.WriteLine("המקסימום שנמצא: " + maxVal);
        return maxVal;
    }

    public static void Main(Queue<int> q)
    {
        int max = FindMax(q);
    }
}`
        }
    },

    'chars': {
        id: 'chars',
        title: '🔤 תווים: Queue<char>',
        studioMode: 'queue',
        initialQueueType: 'char',
        initialQueue: ['a', 'b', 'a', 'c', 'a', 'd'],
        initialParams: { q: ['a', 'b', 'a', 'c', 'a', 'd'] },
        files: {
            'Program.cs': `// ספירת מופעים של תו מסוים בתור של תווים
public class Program
{
    public static int CountChar(Queue<char> q, char target)
    {
        Queue<char> temp = new Queue<char>();
        int count = 0;

        while (!q.IsEmpty())
        {
            char c = q.Remove();
            if (c == target)
            {
                count++;
            }
            temp.Insert(c);
        }

        // שחזור התור המקורי
        while (!temp.IsEmpty())
        {
            q.Insert(temp.Remove());
        }

        Console.WriteLine("התו '" + target + "' נמצא " + count + " פעמים");
        return count;
    }

    public static void Main(Queue<char> q)
    {
        CountChar(q, 'a');
    }
}`
        }
    },

    'strings': {
        id: 'strings',
        title: '📝 מחרוזות: Queue<string>',
        studioMode: 'queue',
        initialQueueType: 'string',
        initialQueue: ['Dana', 'Alon', 'Maya', 'Noam'],
        initialParams: { q: ['Dana', 'Alon', 'Maya', 'Noam'] },
        files: {
            'Program.cs': `// שרשור שמות מתור של מחרוזות
public class Program
{
    public static string JoinNames(Queue<string> q)
    {
        Queue<string> temp = new Queue<string>();
        string result = "";

        while (!q.IsEmpty())
        {
            string name = q.Remove();
            Console.WriteLine("שולף שם: " + name);
            result = result + name + " ";
            temp.Insert(name);
        }

        while (!temp.IsEmpty())
        {
            q.Insert(temp.Remove());
        }

        Console.WriteLine("תוצאת השרשור: " + result);
        return result;
    }

    public static void Main(Queue<string> q)
    {
        JoinNames(q);
    }
}`
        }
    },

    'class-point': {
        id: 'class-point',
        title: '📦 מחלקה מותאמת: Queue<Point> (בלשונית נפרדת)',
        studioMode: 'queue',
        initialQueueType: 'Point',
        initialQueue: [{ x: 10, y: 20 }, { x: 30, y: 40 }, { x: 50, y: 60 }],
        initialParams: { q: [{ x: 10, y: 20 }, { x: 30, y: 40 }, { x: 50, y: 60 }] },
        files: {
            'Point.cs': `// מחלקה מותאמת אישית Point (בלשונית ייעודית נפרדת)
public class Point
{
    private int x;
    private int y;

    public Point(int x, int y)
    {
        this.x = x;
        this.y = y;
    }

    // Getter ו-Setter עבור שדה פרטי x
    public int GetX()
    {
        return this.x;
    }

    public void SetX(int value)
    {
        this.x = value;
    }

    // מאפיין (Property) ב-C# עם get ו-set עבור y
    public int Y
    {
        get { return this.y; }
        set { this.y = value; }
    }

    public override string ToString()
    {
        return "(" + this.x + ", " + this.y + ")";
    }
}`,
            'Program.cs': `// פעולת כניסה ראשית Program המשתמשת במחלקה Point מקובץ Point.cs
public class Program
{
    public static void Main(Queue<Point> q)
    {
        Queue<Point> temp = new Queue<Point>();

        while (!q.IsEmpty())
        {
            Point p = q.Remove();
            Console.WriteLine("נקודה שנשלפה: " + p.ToString() + " [GetX()=" + p.GetX() + ", Y=" + p.Y + "]");
            
            // עדכון ערכים דרך ה-Setter והמאפיין
            p.SetX(p.GetX() + 5);
            p.Y = p.Y + 10;
            Console.WriteLine("--> לאחר שינוי: " + p.ToString());

            temp.Insert(p);
        }

        while (!temp.IsEmpty())
        {
            q.Insert(temp.Remove());
        }
    }
}`
        }
    },

    'queue-of-queues': {
        id: 'queue-of-queues',
        title: '🔄 תור של תורים: Queue<Queue<int>>',
        studioMode: 'queue',
        initialQueueType: 'Queue<int>',
        initialQueue: [[10, 20], [30, 40, 50], [60]],
        initialParams: { superQ: [[10, 20], [30, 40, 50], [60]] },
        files: {
            'Program.cs': `// עבודה עם תור של תורים Queue<Queue<int>>
public class Program
{
    public static void Main(Queue<Queue<int>> superQ)
    {
        Queue<Queue<int>> tempSuper = new Queue<Queue<int>>();
        int grandTotal = 0;

        while (!superQ.IsEmpty())
        {
            Queue<int> subQ = superQ.Remove();
            Console.WriteLine("מעבד תור פנימי: " + subQ.ToString());

            int subSum = 0;
            Queue<int> tempSub = new Queue<int>();

            while (!subQ.IsEmpty())
            {
                int val = subQ.Remove();
                subSum = subSum + val;
                tempSub.Insert(val);
            }

            // שחזור התור הפנימי
            while (!tempSub.IsEmpty())
            {
                subQ.Insert(tempSub.Remove());
            }

            Console.WriteLine("סכום התור הפנימי: " + subSum);
            grandTotal = grandTotal + subSum;
            tempSuper.Insert(subQ);
        }

        // שחזור תור התורים
        while (!tempSuper.IsEmpty())
        {
            superQ.Insert(tempSuper.Remove());
        }

        Console.WriteLine("סכום כולל של כל התורים: " + grandTotal);
    }
}`
        }
    },

    'multi-params': {
        id: 'multi-params',
        title: '👥 מספר תורים ומשתנים: Main(Queue<int> q, Queue<int> r, string tag)',
        studioMode: 'all',
        initialQueueType: 'int',
        initialQueue: [14, 7, 25, 9, 31],
        initialParams: {
            q: [14, 7, 25, 9, 31],
            r: [100, 200],
            tag: "מיזוג-נתונים"
        },
        files: {
            'Program.cs': `// דוגמה עם שני תורים ומשתנים מרובים המועברים לפעולה Main
public class Program
{
    public static void Main(Queue<int> q, Queue<int> r, string tag)
    {
        Console.WriteLine("התחלת עיבוד עבור תגית: " + tag);

        // העברת איברים מ-q ל-r עם הכפלה
        while (!q.IsEmpty())
        {
            int item = q.Remove();
            Console.WriteLine("מעביר מ-q: " + item + " -> מכניס ל-r: " + (item * 2));
            r.Insert(item * 2);
        }

        Console.WriteLine("סיום העברה! תור r מכיל כעת את כל הערכים המוכפלים.");
    }
}`
        }
    },

    'stack-basic': {
        id: 'stack-basic',
        title: '🥞 מחסנית Stack: פעולות בסיסיות (Push, Pop, Top)',
        studioMode: 'stack',
        initialParams: { s: [10, 20, 30, 40, 50] },
        files: {
            'Program.cs': `// פעולות בסיסיות במחסנית Stack<int> (Push, Pop, Top, IsEmpty)
public class Program
{
    public static void Main(Stack<int> s)
    {
        Console.WriteLine("הצצה לראש המחסנית: " + s.Top());
        Stack<int> temp = new Stack<int>();

        // שליפת כל האיברים מהמחסנית והדפסתם
        while (!s.IsEmpty())
        {
            int val = s.Pop();
            Console.WriteLine("נשלף מהמחסנית: " + val);
            temp.Push(val);
        }

        // שחזור המחסנית המקורית (שמירה על כלל הברזל בבגרות)
        while (!temp.IsEmpty())
        {
            s.Push(temp.Pop());
        }

        Console.WriteLine("המחסנית שוחזרה בהצלחה!");
    }
}`
        }
    },

    'stack-reverse-queue': {
        id: 'stack-reverse-queue',
        title: '🔄🥞 משולב: היפוך תור באמצעות מחסנית',
        studioMode: 'all',
        initialQueueType: 'int',
        initialQueue: [10, 20, 30, 40, 50],
        initialParams: { q: [10, 20, 30, 40, 50] },
        files: {
            'Program.cs': `// היפוך סדר איברי תור בעזרת מחסנית עזר (שאלה קלאסית בבגרות)
public class Program
{
    public static void ReverseQueue(Queue<int> q)
    {
        Stack<int> st = new Stack<int>();

        // שלב א': ריקון התור לתוך המחסנית (LIFO יהפוך את סדר האיברים)
        while (!q.IsEmpty())
        {
            int item = q.Remove();
            Console.WriteLine("מעביר מתור למחסנית: " + item);
            st.Push(item);
        }

        // שלב ב': ריקון המחסנית בחזרה לתור
        while (!st.IsEmpty())
        {
            int item = st.Pop();
            Console.WriteLine("מחזיר ממחסנית לתור: " + item);
            q.Insert(item);
        }

        Console.WriteLine("סיום! סדר איברי התור התהפך בהצלחה.");
    }

    public static void Main(Queue<int> q)
    {
        ReverseQueue(q);
    }
}`
        }
    },

    'stack-brackets': {
        id: 'stack-brackets',
        title: '🥞 בדיקת תקינות סוגריים: Stack<char>',
        studioMode: 'stack',
        initialParams: { expr: "([()]())" },
        files: {
            'Program.cs': `// בדיקת איזון ותקינות סוגריים באמצעות מחסנית תווים
public class Program
{
    public static bool IsBalanced(string expr)
    {
        Stack<char> st = new Stack<char>();

        for (int i = 0; i < expr.Length; i++)
        {
            char c = expr[i];
            if (c == '(' || c == '[')
            {
                st.Push(c);
                Console.WriteLine("הכנסת סוגר פותח למחסנית: " + c);
            }
            else if (c == ')' || c == ']')
            {
                if (st.IsEmpty())
                {
                    Console.WriteLine("שגיאה: נמצא סוגר סוגר ללא פותח!");
                    return false;
                }
                char top = st.Pop();
                Console.WriteLine("בדיקת התאמה: נשלף " + top + " מול " + c);
                if (c == ')' && top != '(') return false;
                if (c == ']' && top != '[') return false;
            }
        }

        bool balanced = st.IsEmpty();
        Console.WriteLine("האם כל הסוגריים נסגרו כראוי? " + balanced);
        return balanced;
    }

    public static void Main(string expr)
    {
        bool result = IsBalanced(expr);
        Console.WriteLine("תוצאה סופית: " + (result ? "מאוזן ומסודר!" : "לא מאוזן!"));
    }
}`
        }
    },

    'node-basic': {
        id: 'node-basic',
        title: '🔗 שרשרת חוליות Node: סריקה וחישוב',
        studioMode: 'node',
        initialParams: { chain: [12, 5, 8, 20] },
        files: {
            'Program.cs': `// סריקה והדפסה של שרשרת חוליות Node<int>
public class Program
{
    public static void Main(Node<int> chain)
    {
        Console.WriteLine("שרשרת חוליות התחלתית: " + chain.ToString());
        
        // שימוש במצביע עזר (Runner) כדי לא לאבד את ראש השרשרת (כלל ברזל בבגרות!)
        Node<int> pos = chain;
        int count = 0;
        int sum = 0;
        
        while (pos != null)
        {
            int val = pos.GetValue(); // לפי תקן Unit4.dll (ניתן גם GetInfo)
            Console.WriteLine("חוליה " + count + ": ערך = " + val);
            sum = sum + val;
            count++;
            pos = pos.GetNext();
        }
        
        Console.WriteLine("אורך השרשרת: " + count + ", סכום הערכים: " + sum);
    }
}`
        }
    },

    'binnode-basic': {
        id: 'binnode-basic',
        title: '🌳 עץ בינארי BinNode: סריקה תוכית (In-order)',
        studioMode: 'binnode',
        initialParams: { root: [10, 5, 15, 3, 7] },
        files: {
            'Program.cs': `// סריקה תוכית (In-order) וחישוב צמתים בעץ בינארי BinNode<int>
public class Program
{
    public static int CountNodes(BinNode<int> root)
    {
        if (root == null)
            return 0;
        return 1 + CountNodes(root.GetLeft()) + CountNodes(root.GetRight());
    }

    public static void InOrder(BinNode<int> root)
    {
        if (root != null)
        {
            InOrder(root.GetLeft());
            Console.WriteLine("ביקור בצומת: " + root.GetValue());
            InOrder(root.GetRight());
        }
    }

    public static void Main(BinNode<int> root)
    {
        Console.WriteLine("--- סריקה תוכית (In-order) של העץ ---");
        InOrder(root);
        int total = CountNodes(root);
        Console.WriteLine("סך כל הצמתים בעץ: " + total);
    }
}`
        }
    }
};

const PRESETS_QUEUE_JAVA = {
    'basic': {
        id: 'basic',
        title: '🔹 בסיסי: Queue<Integer> (מציאת מקסימום)',
        studioMode: 'queue',
        initialQueueType: 'Integer',
        initialQueue: [14, 7, 25, 9, 31],
        initialParams: { q: [14, 7, 25, 9, 31] },
        files: {
            'Main.java': `// מציאת ערך מקסימלי בתור של מספרים ב-Java
public class Main {
    public static int findMax(Queue<Integer> q) {
        Queue<Integer> temp = new Queue<Integer>();
        int maxVal = q.head();

        while (!q.isEmpty()) {
            int x = q.remove();
            System.out.println("בודק איבר: " + x);
            if (x > maxVal) {
                maxVal = x;
            }
            temp.insert(x);
        }

        // שחזור התור המקורי (שמירה על כלל הברזל בבגרות)
        while (!temp.isEmpty()) {
            q.insert(temp.remove());
        }

        System.out.println("המקסימום שנמצא: " + maxVal);
        return maxVal;
    }

    public static void main(Queue<Integer> q) {
        int max = findMax(q);
    }
}`
        }
    },

    'chars': {
        id: 'chars',
        title: '🔤 תווים: Queue<Character>',
        studioMode: 'queue',
        initialQueueType: 'Character',
        initialQueue: ['a', 'b', 'a', 'c', 'a', 'd'],
        initialParams: { q: ['a', 'b', 'a', 'c', 'a', 'd'] },
        files: {
            'Main.java': `// ספירת מופעים של תו מסוים בתור של תווים ב-Java
public class Main {
    public static int countChar(Queue<Character> q, char target) {
        Queue<Character> temp = new Queue<Character>();
        int count = 0;

        while (!q.isEmpty()) {
            char c = q.remove();
            if (c == target) {
                count++;
            }
            temp.insert(c);
        }

        // שחזור התור המקורי
        while (!temp.isEmpty()) {
            q.insert(temp.remove());
        }

        System.out.println("התו '" + target + "' נמצא " + count + " פעמים");
        return count;
    }

    public static void main(Queue<Character> q) {
        countChar(q, 'a');
    }
}`
        }
    },

    'strings': {
        id: 'strings',
        title: '📝 מחרוזות: Queue<String>',
        studioMode: 'queue',
        initialQueueType: 'String',
        initialQueue: ['Dana', 'Alon', 'Maya', 'Noam'],
        initialParams: { q: ['Dana', 'Alon', 'Maya', 'Noam'] },
        files: {
            'Main.java': `// שרשור שמות מתור של מחרוזות ב-Java
public class Main {
    public static String joinNames(Queue<String> q) {
        Queue<String> temp = new Queue<String>();
        String result = "";

        while (!q.isEmpty()) {
            String name = q.remove();
            System.out.println("שולף שם: " + name);
            result = result + name + " ";
            temp.insert(name);
        }

        while (!temp.isEmpty()) {
            q.insert(temp.remove());
        }

        System.out.println("תוצאת השרשור: " + result);
        return result;
    }

    public static void main(Queue<String> q) {
        joinNames(q);
    }
}`
        }
    },

    'class-point': {
        id: 'class-point',
        title: '📦 מחלקה מותאמת: Queue<Point> (בלשונית נפרדת)',
        studioMode: 'queue',
        initialQueueType: 'Point',
        initialQueue: [{ x: 10, y: 20 }, { x: 30, y: 40 }, { x: 50, y: 60 }],
        initialParams: { q: [{ x: 10, y: 20 }, { x: 30, y: 40 }, { x: 50, y: 60 }] },
        files: {
            'Point.java': `// מחלקה מותאמת אישית Point (בלשונית ייעודית נפרדת) ב-Java
public class Point {
    private int x;
    private int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    // Getter ו-Setter עבור שדה פרטי x
    public int getX() {
        return this.x;
    }

    public void setX(int value) {
        this.x = value;
    }

    // Getter ו-Setter עבור שדה פרטי y
    public int getY() {
        return this.y;
    }

    public void setY(int value) {
        this.y = value;
    }

    public String toString() {
        return "(" + this.x + ", " + this.y + ")";
    }
}`,
            'Main.java': `// פעולת כניסה ראשית Main המשתמשת במחלקה Point מקובץ Point.java
public class Main {
    public static void main(Queue<Point> q) {
        Queue<Point> temp = new Queue<Point>();

        while (!q.isEmpty()) {
            Point p = q.remove();
            System.out.println("נקודה שנשלפה: " + p.toString() + " [getX()=" + p.getX() + ", getY()=" + p.getY() + "]");

            // עדכון ערכים דרך ה-Setters
            p.setX(p.getX() + 5);
            p.setY(p.getY() + 10);
            System.out.println("--> לאחר שינוי: " + p.toString());

            temp.insert(p);
        }

        while (!temp.isEmpty()) {
            q.insert(temp.remove());
        }
    }
}`
        }
    },

    'queue-of-queues': {
        id: 'queue-of-queues',
        title: '🔄 תור של תורים: Queue<Queue<Integer>>',
        studioMode: 'queue',
        initialQueueType: 'Queue<Integer>',
        initialQueue: [[10, 20], [30, 40, 50], [60]],
        initialParams: { superQ: [[10, 20], [30, 40, 50], [60]] },
        files: {
            'Main.java': `// עבודה עם תור של תורים Queue<Queue<Integer>> ב-Java
public class Main {
    public static void main(Queue<Queue<Integer>> superQ) {
        Queue<Queue<Integer>> tempSuper = new Queue<Queue<Integer>>();
        int grandTotal = 0;

        while (!superQ.isEmpty()) {
            Queue<Integer> subQ = superQ.remove();
            System.out.println("מעבד תור פנימי: " + subQ.toString());

            int subSum = 0;
            Queue<Integer> tempSub = new Queue<Integer>();

            while (!subQ.isEmpty()) {
                int val = subQ.remove();
                subSum = subSum + val;
                tempSub.insert(val);
            }

            // שחזור התור הפנימי
            while (!tempSub.isEmpty()) {
                subQ.insert(tempSub.remove());
            }

            System.out.println("סכום התור הפנימי: " + subSum);
            grandTotal = grandTotal + subSum;
            tempSuper.insert(subQ);
        }

        // שחזור תור התורים
        while (!tempSuper.isEmpty()) {
            superQ.insert(tempSuper.remove());
        }

        System.out.println("סכום כולל של כל התורים: " + grandTotal);
    }
}`
        }
    },

    'multi-params': {
        id: 'multi-params',
        title: '👥 מספר תורים ומשתנים: main(Queue<Integer> q, Queue<Integer> r, String tag)',
        studioMode: 'all',
        initialQueueType: 'Integer',
        initialQueue: [14, 7, 25, 9, 31],
        initialParams: {
            q: [14, 7, 25, 9, 31],
            r: [100, 200],
            tag: "מיזוג-נתונים"
        },
        files: {
            'Main.java': `// דוגמה עם שני תורים ומשתנים מרובים המועברים לפעולה main ב-Java
public class Main {
    public static void main(Queue<Integer> q, Queue<Integer> r, String tag) {
        System.out.println("התחלת עיבוד עבור תגית: " + tag);

        // העברת איברים מ-q ל-r עם הכפלה
        while (!q.isEmpty()) {
            int item = q.remove();
            System.out.println("מעביר מ-q: " + item + " -> מכניס ל-r: " + (item * 2));
            r.insert(item * 2);
        }

        System.out.println("סיום העברה! תור r מכיל כעת את כל הערכים המוכפלים.");
    }
}`
        }
    },

    'stack-basic': {
        id: 'stack-basic',
        title: '🥞 מחסנית Stack: פעולות בסיסיות (push, pop, top)',
        studioMode: 'stack',
        initialParams: { s: [10, 20, 30, 40, 50] },
        files: {
            'Main.java': `// פעולות בסיסיות במחסנית Stack<Integer> (push, pop, top, isEmpty) ב-Java
public class Main {
    public static void main(Stack<Integer> s) {
        System.out.println("הצצה לראש המחסנית: " + s.top());
        Stack<Integer> temp = new Stack<Integer>();

        // שליפת כל האיברים מהמחסנית והדפסתם
        while (!s.isEmpty()) {
            int val = s.pop();
            System.out.println("נשלף מהמחסנית: " + val);
            temp.push(val);
        }

        // שחזור המחסנית המקורית (שמירה על כלל הברזל בבגרות)
        while (!temp.isEmpty()) {
            s.push(temp.pop());
        }

        System.out.println("המחסנית שוחזרה בהצלחה!");
    }
}`
        }
    },

    'stack-reverse-queue': {
        id: 'stack-reverse-queue',
        title: '🔄🥞 משולב: היפוך תור באמצעות מחסנית',
        studioMode: 'all',
        initialQueueType: 'Integer',
        initialQueue: [10, 20, 30, 40, 50],
        initialParams: { q: [10, 20, 30, 40, 50] },
        files: {
            'Main.java': `// היפוך סדר איברי תור בעזרת מחסנית עזר (שאלה קלאסית בבגרות) ב-Java
public class Main {
    public static void reverseQueue(Queue<Integer> q) {
        Stack<Integer> st = new Stack<Integer>();

        // שלב א': ריקון התור לתוך המחסנית (LIFO יהפוך את סדר האיברים)
        while (!q.isEmpty()) {
            int item = q.remove();
            System.out.println("מעביר מתור למחסנית: " + item);
            st.push(item);
        }

        // שלב ב': ריקון המחסנית בחזרה לתור
        while (!st.isEmpty()) {
            int item = st.pop();
            System.out.println("מחזיר ממחסנית לתור: " + item);
            q.insert(item);
        }

        System.out.println("סיום! סדר איברי התור התהפך בהצלחה.");
    }

    public static void main(Queue<Integer> q) {
        reverseQueue(q);
    }
}`
        }
    },

    'stack-brackets': {
        id: 'stack-brackets',
        title: '🥞 בדיקת תקינות סוגריים: Stack<Character>',
        studioMode: 'stack',
        initialParams: { expr: "([()]())" },
        files: {
            'Main.java': `// בדיקת איזון ותקינות סוגריים באמצעות מחסנית תווים ב-Java
public class Main {
    public static boolean isBalanced(String expr) {
        Stack<Character> st = new Stack<Character>();

        for (int i = 0; i < expr.length(); i++) {
            char c = expr.charAt(i);
            if (c == '(' || c == '[') {
                st.push(c);
                System.out.println("הכנסת סוגר פותח למחסנית: " + c);
            } else if (c == ')' || c == ']') {
                if (st.isEmpty()) {
                    System.out.println("שגיאה: נמצא סוגר סוגר ללא פותח!");
                    return false;
                }
                char top = st.pop();
                System.out.println("בדיקת התאמה: נשלף " + top + " מול " + c);
                if (c == ')' && top != '(') return false;
                if (c == ']' && top != '[') return false;
            }
        }

        boolean balanced = st.isEmpty();
        System.out.println("האם כל הסוגריים נסגרו כראוי? " + balanced);
        return balanced;
    }

    public static void main(String expr) {
        boolean result = isBalanced(expr);
        System.out.println("תוצאה סופית: " + (result ? "מאוזן ומסודר!" : "לא מאוזן!"));
    }
}`
        }
    },

    'node-basic': {
        id: 'node-basic',
        title: '🔗 שרשרת חוליות Node: סריקה וחישוב',
        studioMode: 'node',
        initialParams: { chain: [12, 5, 8, 20] },
        files: {
            'Main.java': `// סריקה והדפסה של שרשרת חוליות Node<Integer> ב-Java
public class Main {
    public static void main(Node<Integer> chain) {
        System.out.println("שרשרת חוליות התחלתית: " + chain.toString());
        
        // שימוש במצביע עזר (Runner) כדי לא לאבד את ראש השרשרת (כלל ברזל בבגרות!)
        Node<Integer> pos = chain;
        int count = 0;
        int sum = 0;
        
        while (pos != null) {
            int val = pos.getValue(); // לפי תקן משרד החינוך (ניתן גם getInfo)
            System.out.println("חוליה " + count + ": ערך = " + val);
            sum = sum + val;
            count++;
            pos = pos.getNext();
        }
        
        System.out.println("אורך השרשרת: " + count + ", סכום הערכים: " + sum);
    }
}`
        }
    },

    'binnode-basic': {
        id: 'binnode-basic',
        title: '🌳 עץ בינארי BinNode: סריקה תוכית (In-order)',
        studioMode: 'binnode',
        initialParams: { root: [10, 5, 15, 3, 7] },
        files: {
            'Main.java': `// סריקה תוכית (In-order) וחישוב צמתים בעץ בינארי BinNode<Integer> ב-Java
public class Main {
    public static int countNodes(BinNode<Integer> root) {
        if (root == null)
            return 0;
        return 1 + countNodes(root.getLeft()) + countNodes(root.getRight());
    }

    public static void inOrder(BinNode<Integer> root) {
        if (root != null) {
            inOrder(root.getLeft());
            System.out.println("ביקור בצומת: " + root.getValue());
            inOrder(root.getRight());
        }
    }

    public static void main(BinNode<Integer> root) {
        System.out.println("--- סריקה תוכית (In-order) של העץ ---");
        inOrder(root);
        int total = countNodes(root);
        System.out.println("סך כל הצמתים בעץ: " + total);
    }
}`
        }
    }
};

function getPresetsQueue(lang = 'csharp') {
    return (lang === 'java') ? PRESETS_QUEUE_JAVA : PRESETS_QUEUE_CS;
}

if (typeof window !== 'undefined') {
    window.PRESETS_QUEUE_CS = PRESETS_QUEUE_CS;
    window.PRESETS_QUEUE_JAVA = PRESETS_QUEUE_JAVA;
    window.getPresetsQueue = getPresetsQueue;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PRESETS_QUEUE_CS,
        PRESETS_QUEUE_JAVA,
        getPresetsQueue
    };
}

