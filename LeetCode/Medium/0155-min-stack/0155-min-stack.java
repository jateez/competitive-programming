class MinStack {
    private ArrayList<Integer> stackArrList;
    private ArrayList<Integer> minArrList;

    public MinStack() {
        this.stackArrList = new ArrayList<>();
        this.minArrList = new ArrayList<>();
    }

    public void push(int val) {
        stackArrList.add(val);

        if (minArrList.isEmpty() || val <= minArrList.get(minArrList.size() - 1)) {
            minArrList.add(val);
        }
    }

    public void pop() {
        int removed = stackArrList.remove(stackArrList.size() - 1);
        if (!minArrList.isEmpty() && removed == minArrList.get(minArrList.size() - 1)) {
            minArrList.remove(minArrList.size() - 1);
        }
    }

    public int top() {
        return stackArrList.get(stackArrList.size() - 1);
    }

    public int getMin() {
        return minArrList.get(minArrList.size() - 1);
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */