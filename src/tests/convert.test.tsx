import { convertTextToPDF } from '@/api';
import ConverterModule from '@/modules/convertor';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

jest.mock('@/api', () => ({
  convertTextToPDF: jest.fn(),
}));

test('конвертація тексту в PDF', async () => {
  const mockBlob = new Blob(['PDF'], { type: 'application/pdf' });
  (convertTextToPDF as jest.Mock).mockResolvedValue(mockBlob);

  render(<ConverterModule />);

  fireEvent.change(screen.getByPlaceholderText(/введіть текст/i), {
    target: { value: 'Test' },
  });

  fireEvent.click(screen.getByText(/Конвертувати в PDF/i));

  await waitFor(() => {
    expect(convertTextToPDF).toHaveBeenCalledWith('Test');
  });
});
