/**
 * Given an array of integers, find the one that appears an odd number of times.
 *
 * There will always be only one integer that appears an odd number of times.
 *
 * Examples
 * [7] should return 7, because it occurs 1 time (which is odd).
 * [0] should return 0, because it occurs 1 time (which is odd).
 * [1,1,2] should return 2, because it occurs 1 time (which is odd).
 * [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
 * [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 */
package codewars;
import java.util.TreeSet;


//public class FindOdd {
//    public static int findIt(int[] a) {
//        int odd=0;
//        int count=0;
//        int actualNumber;
//
//        for(int i = 0; i < a.length; i++) {
//            actualNumber = a[i];
//            for(int j= 0; j <a.length; j++) {
//                if (a[j] == actualNumber) {
//                    count++;
//                }
//            }
//            if (count % 2 != 0) {
//                odd = actualNumber;
//            }
//            count = 0;
//        }
//
//        return odd;
//    }
//}

public class FindOdd {
    public static int findIt(int[] a) {
        final TreeSet<Integer> set = new TreeSet<>();
        for (int x : a) {
            if (set.contains(x)) {
                set.remove(x);
            } else {
                set.add(x);
            }
        }
        return set.first();
    }

    public static void main(String[] args) {
       System.out.println(FindOdd.findIt(new int[]{20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5}));
        System.out.println(FindOdd.findIt(new int[]{1,1,2,-2,5,2,4,4,-1,-2,5}));
        System.out.println(FindOdd.findIt(new int[]{20,1,1,2,2,3,3,5,5,4,20,4,5}));
        System.out.println(FindOdd.findIt(new int[]{10}));
    }
}


