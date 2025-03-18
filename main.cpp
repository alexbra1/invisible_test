#include <iostream>
#include <vector>
#include <string>

using namespace std;

vector<string> justifyText(vector<string> &words, int maxWidth)
{
    vector<string> result;
    vector<string> currentLine;
    int currentLength = 0;

    for (const string &word : words)
    {
        if (currentLength + word.length() + currentLine.size() > maxWidth)
        {
            string line = currentLine[0];
            for (int i = 1; i < currentLine.size(); i++)
            {
                line += " " + currentLine[i];
            }
            result.push_back(line);
            currentLine.clear();
            currentLength = 0;
        }

        currentLine.push_back(word);
        currentLength += word.length();
    }

    if (!currentLine.empty())
    {
        string line = currentLine[0];
        for (int i = 1; i < currentLine.size(); i++)
        {
            line += " " + currentLine[i];
        }
        result.push_back(line);
    }

    return result;
}

void printMatrix(const vector<vector<int>> &matrix)
{
    for (const auto &row : matrix)
    {
        for (int val : row)
        {
            cout << val << " ";
        }
        cout << endl;
    }
}

vector<vector<int>> transposeMatrix(const vector<vector<int>> &matrix, int rows, int cols)
{
    vector<vector<int>> transposed(cols, vector<int>(rows));

    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            transposed[j][i] = matrix[i][j];
        }
    }

    return transposed;
}

int main()
{
    vector<string> words = {"This", "is", "an", "example", "of", "text", "justification."};
    int maxWidth = 10;

    vector<string> output = justifyText(words, maxWidth);

    for (const string &line : output)
    {
        cout << line << endl;
    }

    int rows, cols;

    cout << "Rows: ";
    cin >> rows;

    cout << "Columns: ";
    cin >> cols;

    vector<vector<int>> matrix(rows, vector<int>(cols));

    cout << "Enter matrix elements:" << endl;
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            cin >> matrix[i][j];
        }
    }

    vector<vector<int>> transposed = transposeMatrix(matrix, rows, cols);

    cout << "\nTransposed matrix:" << endl;
    printMatrix(transposed);

    return 0;
}